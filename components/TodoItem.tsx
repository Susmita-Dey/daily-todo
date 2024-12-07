"use client";

import { useTodoStore } from "@/store/todoStore";
import { Todo } from "@/types/Todo";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, text, isCompleted } = todo;
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-1 border rounded mr-2"
          />
        ) : (
          <span
            onClick={() => toggleTodo(id)}
            className={`cursor-pointer flex-1 ${
              isCompleted ? "line-through" : ""
            }`}
          >
            {text}
          </span>
        )}
        {isEditing ? (
          <button
            onClick={handleSave}
            className="p-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </motion.div>
    </div>
  );
};

export default TodoItem;
