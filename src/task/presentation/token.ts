import { InjectionToken } from '@angular/core';
import { CreateTaskGateway } from '../domain/create-task.gateway';

export const CREATE_TASK_GATEWAY = new InjectionToken<CreateTaskGateway>(
  'CreateTaskGateway'
);
