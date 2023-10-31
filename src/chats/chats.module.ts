import {
  SocketSchema,
  Socket as SocketModel,
  Chatting,
  ChattingSchema,
} from './models';
import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chatting.name, schema: ChattingSchema },
      { name: SocketModel.name, schema: SocketSchema },
    ]),
  ],
  providers: [ChatsGateway],
})
export class ChatsModule {}
