import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'messenger' })
export class ChatsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('chat');

  constructor() {
    this.logger.log('constructor'); // first call
  }

  afterInit() {
    this.logger.log('init'); // second call
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log('connected');
  }

  handleDisconnect(client: any) {
    this.logger.log('disconnected');
  }

  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(`socket is ${socket.id}`);
    console.log(`gateway username is ${username}`);
    socket.emit('hello_user', `hello ${username}`);
  }
}
