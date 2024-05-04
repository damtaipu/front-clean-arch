import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PROVIDERS } from '@shared/project/provider/providers';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), PROVIDERS]
};
