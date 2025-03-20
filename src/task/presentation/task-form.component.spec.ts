import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TaskFormComponent } from "./task-form.component";
import { By } from "@angular/platform-browser";

describe('TaskFormComponent', () => {
  let fixture: ComponentFixture<TaskFormComponent>;
  
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TaskFormComponent],
    }).createComponent(TaskFormComponent);

    fixture.detectChanges();
  });

  it('should emit taskLabelChange when form is submitted', () => {
    // given
    vi.spyOn(fixture.componentInstance.taskLabelChange, 'emit');
    const expectedValue = 'Test';

    const inputDebug = fixture.debugElement.query(By.css('input'));
    inputDebug.nativeElement.value = expectedValue;
    inputDebug.triggerEventHandler('input', { target: inputDebug.nativeElement });
    fixture.detectChanges();

    // when
    fixture.debugElement.nativeElement.querySelector('button').click();

    // then
    expect(fixture.componentInstance.taskLabelChange.emit).toHaveBeenCalledWith(expectedValue);
  });
  
});
