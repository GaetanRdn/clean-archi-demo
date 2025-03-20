import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskFormComponent } from '../task/presentation/task-form.component';
import { TaskPageComponent } from '../task/presentation/task.page';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaskPageComponent],
  template: `<h1>{{ title }}</h1>
    <app-task-page /> `,
})
export class AppComponent {
  readonly title = 'Task list';
}
