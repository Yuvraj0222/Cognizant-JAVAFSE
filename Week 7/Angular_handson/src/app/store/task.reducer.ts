import { createReducer, on } from '@ngrx/store';
import { Task, TaskFilter } from '../models/task.model';
import * as TaskActions from './task.actions';

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  loading: boolean;
  error: string | null;
}

export const initialTaskState: TaskState = {
  tasks: [],
  filter: 'all',
  loading: false,
  error: null
};

export const taskReducer = createReducer(
  initialTaskState,
  // Loading Handlers
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false
  })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  // Add Handlers
  on(TaskActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),
  on(TaskActions.addTaskFailure, (state, { error }) => ({
    ...state,
    error
  })),
  // Toggle Status Handler
  on(TaskActions.toggleTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),
  // Filter Handler
  on(TaskActions.changeFilter, (state, { filter }) => ({
    ...state,
    filter
  }))
);
