import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2981;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const postTodos = (title: string) => {
  return client.post(`/todos`, {
    userId: USER_ID,
    title,
    completed: true,
  });
};

// Add more methods here
