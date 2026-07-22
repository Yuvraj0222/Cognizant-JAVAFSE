import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TaskDashboardComponent } from './task-dashboard.component';
import * as TaskActions from '../../store/task.actions';
import * as TaskSelectors from '../../store/task.selectors';
import { initialTaskState } from '../../store/task.reducer';

describe('TaskDashboardComponent', () => {
  let component: TaskDashboardComponent;
  let fixture: ComponentFixture<TaskDashboardComponent>;
  let store: MockStore;

  const mockTasks = [
    { id: '1', title: 'Task 1', description: 'Desc 1', completed: false, priority: 'medium' as const }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TaskDashboardComponent],
      providers: [
        provideMockStore({
          initialState: { tasks: initialTaskState }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDashboardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    // Override selector mocks to return sample datasets
    store.overrideSelector(TaskSelectors.selectFilteredTasks, mockTasks);
    store.overrideSelector(TaskSelectors.selectFilter, 'all');
    store.overrideSelector(TaskSelectors.selectLoading, false);
    store.overrideSelector(TaskSelectors.selectError, null);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadTasks on initialization', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(TaskActions.loadTasks());
  });

  it('should dispatch toggleTask when toggleStatus is invoked', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.toggleStatus('1');
    expect(dispatchSpy).toHaveBeenCalledWith(TaskActions.toggleTask({ id: '1' }));
  });

  it('should dispatch addTask action on form submission if valid', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.taskForm.setValue({
      title: 'New Testing Task',
      description: 'New Testing Description',
      priority: 'high'
    });
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith(
      TaskActions.addTask({
        title: 'New Testing Task',
        description: 'New Testing Description',
        priority: 'high'
      })
    );
  });
});
