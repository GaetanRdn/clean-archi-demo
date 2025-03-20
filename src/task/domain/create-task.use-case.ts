import { Observable } from 'rxjs';
import { CreateTaskGateway } from './create-task.gateway';
import { Task, TaskProps } from './task';

export class CreateTaskUseCase {
  constructor(private readonly gateway: CreateTaskGateway) {}

  execute(payload: TaskProps): Observable<Task> {
    return this.gateway.createTask(payload);
  }
}
