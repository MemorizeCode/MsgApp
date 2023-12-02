import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { retry } from 'rxjs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessageService {
    constructor(private readonly prisma:PrismaService){}

    
    async sendmessage(text,roomId, userId){
        // await new Promise((resolve)=>
        // setTimeout(resolve,3000)
        // )
        const room = await this.prisma.room.findFirst({
            where:{
                id:roomId
            }
        })
        if(room){
            const msg = await this.prisma.messages.create({
                data:{
                   roomId:roomId,
                   userId:userId,
                   text:text,
                }
            })
        }
    }

    async editmessage(idMessage, text,userId) {
        const message = await this.prisma.messages.findUnique({
            where:{
                id:idMessage
            }
        })
        if(message.userId == userId){
            const update = await this.prisma.messages.update({
                where:{
                    id:idMessage
                },
                data:{
                    text:text
                }
            })
            
            // throw new HttpException("Успешно", HttpStatus.CREATED)
        }
        else{
            // throw new HttpException("Нет прав", HttpStatus.BAD_REQUEST)
        }
    }

    async deletemessage(idMessage, userId){
        const message = await this.prisma.messages.findUnique({
            where:{
                id:idMessage
            }
        })
        if(message.userId == userId){
            const update = await this.prisma.messages.update({
                where:{
                    id:idMessage
                },
                data:{
                    delete:true
                }
            })
        }
        else{
            throw new HttpException("Нет прав", HttpStatus.BAD_REQUEST)
        }
    }

    async getMessages(roomId,userId){
        const messagesa = await this.prisma.messages.findMany({
            where:{
                roomId:roomId,
                delete:false,
            },
            include:{
                user:{
                    select:{
                        login:true
                    }
                }
            }
        })
        if(messagesa.length < 0){
            return "Сообщений нет"
        }
        else{
            return messagesa
        }
    }
    

}
