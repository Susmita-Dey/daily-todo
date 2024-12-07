"use client";

import { useTodoStore } from "@/store/todoStore";
import React from "react";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const selectedDate = useTodoStore((state) => state.selectedDate);

  const filteredTodos = todos.filter((todo) => todo.date === selectedDate);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Tasks for {new Date(selectedDate).toLocaleDateString("en-US")}
      </h2>
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
        <p>No tasks for this date.</p>
      )}
    </div>
  );
};

export default TodoList;
