export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  date: string;
}

export interface TodoState {
  todos: Todo[];
  selectedDate: string;
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  setSelectedDate: (date: string) => void;
}
