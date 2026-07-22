/**
 * Task Interface representing task object schema
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

/**
 * TaskFilter type definitions
 */
export type TaskFilter = 'all' | 'pending' | 'completed';
