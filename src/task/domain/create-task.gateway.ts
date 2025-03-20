import { Task, TaskProps } from "./task";
import { Observable } from 'rxjs';

export interface CreateTaskGateway {
  createTask(task: TaskProps): Observable<Task>;
}