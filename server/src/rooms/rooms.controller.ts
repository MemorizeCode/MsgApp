import { Controller, Get, Param, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('/api/rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}


  @Get('/getAllRooms')
  async getAllRooms(){
    const rooms = await this.roomsService.getAllRooms()
    return rooms
  }

  //Тут типо только авторизованный может получат
  @Get('/getRoom/:id')
  async getCurrentRoom(@Param() param){
    const room = await this.roomsService.getRoom(Number(param.id[0]))
    return room
  }
}
