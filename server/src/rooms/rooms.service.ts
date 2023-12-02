import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoomsService {
    constructor(private readonly prisma: PrismaService){}

    async getAllRooms(){
        const rooms = await this.prisma.room.findMany({
            where:{
                typeRoom:'PUBLIC'
            }
        })
        if(rooms.length > 0){
            return rooms
        }
        else{
            return "Комнат нет"
        }
    }

    async getRoom(id:number){
        const room = await this.prisma.room.findUnique({
            where:{
                id:id,
                typeRoom:'PUBLIC'
            }
        })
        return room
    }
}
