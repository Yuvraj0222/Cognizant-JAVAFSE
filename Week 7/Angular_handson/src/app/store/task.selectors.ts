import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state) => state.tasks
);

export const selectFilter = createSelector(
  selectTaskState,
  (state) => state.filter
);

export const selectLoading = createSelector(
  selectTaskState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectTaskState,
  (state) => state.error
);

// Filtered tasks selector based on current active filter
export const selectFilteredTasks = createSelector(
  selectAllTasks,
  selectFilter,
  (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter((t) => t.completed);
      case 'pending':
        return tasks.filter((t) => !t.completed);
      default:
        return tasks;
    }
  }
);
