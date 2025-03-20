import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskFormComponent } from './task-form.component';
import { CreateTaskUseCase } from '../domain/create-task.use-case';
import { CREATE_TASK_GATEWAY } from './token';

@Component({
  selector: 'app-task-page',
  imports: [TaskFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <app-task-form (taskLabelChange)="onTaskLabelChange($event)" /> `,
})
export class TaskPageComponent {
  private readonly createTaskUseCase: CreateTaskUseCase = new CreateTaskUseCase(
    inject(CREATE_TASK_GATEWAY)
  );

  onTaskLabelChange(taskLabel: string): void {
    this.createTaskUseCase.execute({ label: taskLabel }).subscribe(console.log);
  }
}
