export type TaskProps = {
  id?: number;
  label: string;
  isDone?: boolean;
};

export class Task {
  readonly id: number;

  readonly label: string;

  readonly isDone: boolean;

  constructor(props: Pick<Required<TaskProps>, 'label' | 'id'> & Partial<Pick<TaskProps, 'isDone'>>) {
    this.id = props.id;
    this.label = props.label;
    this.isDone = props.isDone ?? false;
  }
}