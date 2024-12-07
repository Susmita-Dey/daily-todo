"use client";

import { useTodoStore } from "@/store/todoStore";
import { Todo } from "@/types/Todo";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
    <div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center p-2 border-b border-t">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 p-1 border rounded mr-2"
            />
          ) : (
            <div className="flex" onClick={() => toggleTodo(id)}>
              {isCompleted ? (
                <FaCircleCheck className="cursor-pointer size-6 text-black mt-0.5" />
              ) : (
                <RiCheckboxBlankCircleLine className="cursor-pointer size-6 text-black mt-0.5" />
              )}
              <span
                className={`cursor-pointer flex-1 text-lg ml-2 ${
                  isCompleted ? "line-through" : ""
                }`}
              >
                {text}
              </span>
            </div>
          )}
          <div className="flex justify-normal">
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
                className="p-1 text-center text-yellow-500 rounded hover:text-yellow-600 mr-2"
              >
                <FaRegEdit className="size-6 mt-0.5" />
              </button>
            )}
            <button
              onClick={() => deleteTodo(id)}
              className="text-red-500 hover:underline"
            >
              <MdDelete className="size-6 mt-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TodoItem;
