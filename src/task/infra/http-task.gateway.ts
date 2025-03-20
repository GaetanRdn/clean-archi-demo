import { inject, Injectable } from '@angular/core';
import { CreateTaskGateway } from '../domain/create-task.gateway';
import { Observable } from 'rxjs';
import { TaskProps, Task } from '../domain/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpTaskGateway implements CreateTaskGateway {
  private readonly http = inject(HttpClient);

  createTask(task: TaskProps): Observable<Task> {
    return this.http.post<Task>('/tasks', task);
  }
}
