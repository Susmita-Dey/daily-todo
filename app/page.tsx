import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import WeeklyCalendar from "@/components/WeeklyCalendar";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>
      <WeeklyCalendar />
      <AddTodo />
      <TodoList />
    </div>
  );
}
