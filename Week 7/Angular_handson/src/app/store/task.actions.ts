import { createAction, props } from '@ngrx/store';
import { Task, TaskFilter } from '../models/task.model';

// Load Tasks Actions
export const loadTasks = createAction('[Task Dashboard] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task API] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Task API] Load Tasks Failure',
  props<{ error: string }>()
);

// Add Task Actions
export const addTask = createAction(
  '[Task Dashboard] Add Task',
  props<{ title: string; description: string; priority: 'low' | 'medium' | 'high' }>()
);
export const addTaskSuccess = createAction(
  '[Task API] Add Task Success',
  props<{ task: Task }>()
);
export const addTaskFailure = createAction(
  '[Task API] Add Task Failure',
  props<{ error: string }>()
);

// UI Toggle Actions
export const toggleTask = createAction(
  '[Task Dashboard] Toggle Task Status',
  props<{ id: string }>()
);

// Filter Actions
export const changeFilter = createAction(
  '[Task Dashboard] Change Filter',
  props<{ filter: TaskFilter }>()
);
