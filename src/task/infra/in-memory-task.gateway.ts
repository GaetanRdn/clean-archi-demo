import { Injectable } from '@angular/core';
import { CreateTaskGateway } from '../domain/create-task.gateway';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TaskProps, Task } from '../domain/task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTaskGateway implements CreateTaskGateway {
  private readonly tasks$ = new BehaviorSubject<Task[]>([]);

  private static id = 1;

  createTask(task: TaskProps): Observable<Task> {
    const tasks = this.tasks$.getValue();
    const newTask = new Task({ ...task, id: InMemoryTaskGateway.id++ });
    this.tasks$.next([...tasks, newTask]);
    console.log(this.tasks$.getValue());
    return of(newTask);
  }
}
