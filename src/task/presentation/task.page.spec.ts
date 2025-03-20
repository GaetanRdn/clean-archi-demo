import { TestBed } from '@angular/core/testing';
import { TaskPageComponent } from './task.page';
import { CREATE_TASK_GATEWAY } from './token';
import { HttpTaskGateway } from '../infra/http-task.gateway';
import { CreateTaskGateway } from '../domain/create-task.gateway';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('TaskPageComponent', () => {
  let component: TaskPageComponent;
  let gateway: CreateTaskGateway;
  let httpController: HttpTestingController;

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      imports: [TaskPageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CREATE_TASK_GATEWAY, useClass: HttpTaskGateway },
      ],
    }).createComponent(TaskPageComponent);

    component = fixture.componentInstance;
    gateway = TestBed.inject(CREATE_TASK_GATEWAY);
  });

  it('should create', () => {
    // given
    vi.spyOn(gateway, 'createTask');
    httpController = TestBed.inject(HttpTestingController);

    // when
    component.onTaskLabelChange('Test');

    // then
    expect(gateway.createTask).toHaveBeenCalledWith({ label: 'Test' });
    httpController
      .expectOne({ method: 'POST', url: '/tasks' })
      .flush({ id: 1, label: 'Test', isDone: false });
    httpController.verify();
  });
});
