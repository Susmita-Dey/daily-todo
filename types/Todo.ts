export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  date: string;
}

export interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}
