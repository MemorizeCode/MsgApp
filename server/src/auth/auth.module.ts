import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';



@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret: 'key',
      signOptions:{
        expiresIn:'1h'
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,PrismaService],
  exports:[PrismaService]
})
export class AuthModule {}
