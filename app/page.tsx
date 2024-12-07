import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import WeeklyCalendar from "@/components/WeeklyCalendar";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl w-full p-4">
      <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>
      <WeeklyCalendar />
      <AddTodo />
      <TodoList />
    </div>
  );
}
