"use client";

import { useTodoStore } from "@/store/todoStore";
import React from "react";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const selectedDate = useTodoStore((state) => state.selectedDate);

  const filteredTodos = todos.filter((todo) => todo.date === selectedDate);
  const today = new Date().toLocaleDateString("en-US");
  const chosenDate = new Date(selectedDate).toLocaleDateString("en-US");
  // console.log(today, chosenDate);

  return (
    <div className="mt-10">
      <span className="mb-5">
        {today === chosenDate ? (
          <h2 className="text-xl font-bold mb-4">Today&apos;s tasks:</h2>
        ) : (
          <h2 className="text-xl font-bold mb-4">Tasks for {chosenDate}</h2>
        )}
      </span>
      {filteredTodos.length > 0 ? (
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence>
              {filteredTodos.map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TodoItem todo={todo} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : (
        <p className="italic text-lg">No tasks for this date.</p>
      )}
    </div>
  );
};

export default TodoList;
