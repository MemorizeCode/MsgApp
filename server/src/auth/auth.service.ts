import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private readonly prisma:PrismaService,
        private readonly jwt: JwtService
        ){}

    async login(login:string,password:string){
        const user = await this.prisma.user.findFirst({
            where:{
                login:login
            }
        })
        if(user){
            const truePasdword  = await bcrypt.compare(password, user.password)
            if(truePasdword){
                const tokenBody = {
                    id: user.id
                }
                const jwtToken =await this.jwt.signAsync(tokenBody)
                return {token:jwtToken}
            }
            else{
                return "Пароль не правильный"
                throw new HttpException("Пароль не правильный", HttpStatus.BAD_REQUEST)
            }
        }
        else{
            return "Логин не существует!"
            throw new HttpException("Логин не существует!", HttpStatus.BAD_REQUEST)
        }
    }

    async register(login:string,password:string, password2:string){
        const user = await this.prisma.user.findFirst({
            where:{
                login:login
            }
        })
        if(user){
            return {message:"Юзер такой есть"}
        }
else{
    
            const hashPassword = await bcrypt.hash(password,4)
            const newUser = await this.prisma.user.create({
                data:{
                    login:login,
                    password:hashPassword
                }
            })
            return {
                message:"Юзер создан"
            }
}
    }

    async validateJwt(jwt:string){
        try{
            const dec = jwt.split(' ')[1]
            const trueJwt = await this.jwt.verify(dec)
            if(trueJwt){
                return true
            }
        }
        catch(e){
            return false
        }
    } 

    async idMy(jwt:string){
        try{
            const dec = jwt.split(' ')[1]
            const trueJwt = await this.jwt.verify(dec)
            if(trueJwt){
                return {id:trueJwt.id}
            }
        }
        catch(e){
            // console.log(e)
        }
    }
} 
