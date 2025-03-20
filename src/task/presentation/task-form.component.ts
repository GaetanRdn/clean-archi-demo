import { ChangeDetectionStrategy, Component, output } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-task-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <form>
      <input type="text" placeholder="Task label" [formControl]="taskLabelControl" />
      <button type="button" (click)="onSubmit()" [disabled]="taskLabelControl.invalid">Create</button>
    </form>
  `,
})
export class TaskFormComponent {
  protected readonly taskLabelControl = new FormControl('', { nonNullable: true, validators: [Validators.required] });

  readonly taskLabelChange = output<string>();

  protected onSubmit() {
    this.taskLabelChange.emit(this.taskLabelControl.value);
  }
}
