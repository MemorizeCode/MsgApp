import { Controller, Post,Body,Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body){
    let {login,password} = body
    // console.log(this.authService.login(login,password))
    return this.authService.login(login,password)
  }


  @Post('/register')
  async register(@Body() body){
    let {login,password,password2} = body
    return this.authService.register(login,password,password2)
  }

  
  @Post('/validateJWT')
  async validateJwt(@Body() body){
    let {jwt} = body
    return this.authService.validateJwt(jwt)
  }


  @Post('/myId')
  async myId(@Req() req){
    let jwt = req.headers.authorization
    return this.authService.idMy(jwt)
  }
}


