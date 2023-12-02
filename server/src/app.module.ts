import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './rooms/rooms.module';
import { MessageModule } from './message/message.module';
import { JwtMiddleware } from './middleware/auth.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, RoomsModule, MessageModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(
          JwtMiddleware
        )
        .forRoutes(
          {path:'/api/message/deletemessage', method: RequestMethod.POST},
          {path:'/api/message/sendmessage', method: RequestMethod.POST},
          {path:'/api/message/editmessage', method: RequestMethod.POST},
          {path:'/api/rooms/getRoom/:id', method: RequestMethod.GET},
          {path:'/api/message/getMessages', method:RequestMethod.ALL}  
        )
    }
}
