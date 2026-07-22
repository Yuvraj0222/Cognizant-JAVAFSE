import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Task } from '../models/task.model';

/**
 * TaskService Injectable
 * 
 * Performs HttpClient requests to fetch and persist task data.
 * Demonstrates singleton dependency injection (providedIn: 'root') and RxJS piping.
 */
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Public mock API

  constructor(private http: HttpClient) {}

  /**
   * Fetches tasks from remote API.
   * Maps typings, retries twice on failure, and catches HTTP errors using RxJS pipeline.
   */
  getTasks(): Observable<Task[]> {
    return this.http.get<any[]>(`${this.apiUrl}?_limit=5`).pipe(
      retry(2), // Retry failed HTTP calls up to 2 times
      map((todos) =>
        todos.map((todo) => ({
          id: todo.id.toString(),
          title: todo.title,
          description: 'Loaded dynamically from remote REST API placeholder',
          completed: todo.completed,
          priority: todo.id % 2 === 0 ? 'high' : 'medium'
        }))
      ),
      catchError((error) => {
        console.error('Error fetching tasks from API', error);
        return throwError(() => new Error('Failed to retrieve task data.'));
      })
    );
  }

  /**
   * Adds a new task via POST request.
   */
  addTask(task: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<any>(this.apiUrl, task).pipe(
      map((res) => ({
        ...res,
        id: Math.random().toString(36).substring(2, 9) // Generate local mock ID
      })),
      catchError((err) => throwError(() => new Error('Failed to add task.')))
    );
  }
}
