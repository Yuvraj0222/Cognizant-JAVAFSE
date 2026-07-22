import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TaskService } from '../services/task.service';
import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  // Effect calling TaskService.getTasks on loadTasks dispatch
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError((err) =>
            of(TaskActions.loadTasksFailure({ error: err.message }))
          )
        )
      )
    )
  );

  // Effect calling TaskService.addTask on addTask dispatch
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap((action) =>
        this.taskService
          .addTask({
            title: action.title,
            description: action.description,
            completed: false,
            priority: action.priority
          })
          .pipe(
            map((task) => TaskActions.addTaskSuccess({ task })),
            catchError((err) =>
              of(TaskActions.addTaskFailure({ error: err.message }))
            )
          )
      )
    )
  );
}
