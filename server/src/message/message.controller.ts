import { Controller, Post,Body, Req, Delete, Put, Patch, Get, Param, Query, HttpStatus } from '@nestjs/common';
import { MessageService } from './message.service';
import { query } from 'express';

@Controller('/api/message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('/deletemessage')
  async deletemessage(@Body() body,@Req() req){
    let {idMessage} = body
    let userId = req.user
    console.log(userId)
    return await this.messageService.deletemessage(Number(idMessage),Number(userId.id))
  }

  @Post('/sendmessage')
  async sendmessage(@Body() body, @Req() req){
    let {text,roomId} = body
    let userId = req.user
    console.log(userId)
    return await this.messageService.sendmessage(text,Number(roomId),Number(userId.id))
  }

  @Post('/editmessage')
  async editmessage(@Body() body, @Req() req){
    let {idMessage, text} = body
    let userId = req.user
    return await this.messageService.editmessage(Number(idMessage),text,Number(userId.id))
  }
  
  @Get('/getMessages')
  async getMessage(@Query() query, @Req() req){
    let {roomId} = query 
    let userId = req.user
    return await this.messageService.getMessages(Number(roomId), Number(userId.id))
  }
}
 