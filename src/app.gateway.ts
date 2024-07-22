import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { SocketWithI18nContext } from "./socket.with.i18ncontext.type";

@WebSocketGateway()
export class AppGateway {
  @SubscribeMessage('connect')
  handleConnection(client: SocketWithI18nContext) {
    const message = client.i18nContext.translate('test.message');
    client.emit('test', message);
  }
}
