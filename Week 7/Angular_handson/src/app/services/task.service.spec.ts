import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Assert that no outstanding HTTP requests remain unhandled
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch tasks and map data schema correctly', () => {
    const mockTodos = [
      { id: 1, title: 'Test Todo 1', completed: false },
      { id: 2, title: 'Test Todo 2', completed: true }
    ];

    service.getTasks().subscribe((tasks) => {
      expect(tasks.length).toBe(2);
      expect(tasks[0].id).toBe('1');
      expect(tasks[0].title).toBe('Test Todo 1');
      expect(tasks[1].priority).toBe('high'); // Even IDs mapped to high priority
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos?_limit=5');
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos); // Emit mock response
  });
});
