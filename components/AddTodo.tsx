"use client";

import { useTodoStore } from "@/store/todoStore";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo({
      id: uuidv4(),
      text,
      isCompleted: false,
      date: new Date().toISOString().split("T")[0],
    });
    setText("");
  };
  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="text"
        className="size-9/12 p-3 border-4 rounded"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="p-3.5 font-semibold bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
