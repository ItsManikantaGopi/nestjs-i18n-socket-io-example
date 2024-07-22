import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppGateway } from "./app.gateway";
import { AcceptLanguageResolver, I18nModule } from "nestjs-i18n";
import * as path from "path";

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(path.resolve(), '/src/i18n/'),
        watch: true,
      },
      resolvers: [
        new AcceptLanguageResolver(), // There are several other resolvers to resolve language for the context.
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway]
})
export class AppModule {
}
