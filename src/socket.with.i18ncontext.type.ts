import { Socket } from "socket.io";
import { I18nContext } from "nestjs-i18n";

type SocketPayload = {
  i18nContext: I18nContext;
};

export type SocketWithI18nContext = Socket & SocketPayload;