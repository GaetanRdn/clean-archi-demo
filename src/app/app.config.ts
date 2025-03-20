import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CREATE_TASK_GATEWAY } from 'src/task/presentation/token';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryTaskGateway } from 'src/task/infra/in-memory-task.gateway';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: CREATE_TASK_GATEWAY, useClass: InMemoryTaskGateway },
  ],
};
