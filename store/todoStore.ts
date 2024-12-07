import { TodoState } from "@/types/Todo";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist<TodoState>(
    (set) => ({
      todos: [],
      selectedDate: new Date().toISOString().split("T")[0], // Default to today
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        })),
      updateTodo: (id, text) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      setSelectedDate: (date) => set(() => ({ selectedDate: date })),
    }),
    {
      name: "daily-todo-storage", // key in localStorage
    }
  )
);
