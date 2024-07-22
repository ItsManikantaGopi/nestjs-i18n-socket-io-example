import { I18nContext, I18nService } from 'nestjs-i18n';
import { SocketWithI18nContext } from './socket.with.i18ncontext.type';

export const socketIoMiddleware =
  (i18nService: I18nService<any>) =>
  async (socket: SocketWithI18nContext, next) => {
    const locale = socket.handshake.headers['accept-language'] || 'en';

    const i18nContext: I18nContext = new I18nContext<Record<string, unknown>>(
      locale,
      i18nService,
    );

    socket.i18nContext = i18nContext;

    next();
  };
