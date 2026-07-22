import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task, TaskFilter } from '../../models/task.model';
import * as TaskActions from '../../store/task.actions';
import * as TaskSelectors from '../../store/task.selectors';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  // Observables mapping NgRx selectors
  tasks$: Observable<Task[]>;
  filter$: Observable<TaskFilter>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  taskForm: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.tasks$ = this.store.select(TaskSelectors.selectFilteredTasks);
    this.filter$ = this.store.select(TaskSelectors.selectFilter);
    this.loading$ = this.store.select(TaskSelectors.selectLoading);
    this.error$ = this.store.select(TaskSelectors.selectError);

    // Initializing Reactive Task Form
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      priority: ['medium', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Dispatch action to load tasks on component mount
    this.store.dispatch(TaskActions.loadTasks());
  }

  /**
   * Dispatches toggle action for status update
   */
  toggleStatus(id: string): void {
    this.store.dispatch(TaskActions.toggleTask({ id }));
  }

  /**
   * Dispatches changeFilter action to update active view filter
   */
  setFilter(filter: TaskFilter): void {
    this.store.dispatch(TaskActions.changeFilter({ filter }));
  }

  /**
   * Submits task form and dispatches addTask action
   */
  onSubmit(): void {
    if (this.taskForm.valid) {
      const { title, description, priority } = this.taskForm.value;
      this.store.dispatch(TaskActions.addTask({ title, description, priority }));
      this.taskForm.reset({ priority: 'medium' }); // Reset form controls
    }
  }
}
