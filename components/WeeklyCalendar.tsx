"use client";

import { useTodoStore } from "@/store/todoStore";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WeeklyCalendar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const setSelectedDate = useTodoStore((state) => state.setSelectedDate);
  const selectedDate = useTodoStore((state) => state.selectedDate);

  const generateWeek = (startDate: Date) => {
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      return day.toISOString().split("T")[0];
    });
  };

  const currentWeek = generateWeek(currentWeekStart);

  const handleWeekChange = (direction: "prev" | "next") => {
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(
      currentWeekStart.getDate() + (direction === "next" ? 7 : -7)
    );
    setCurrentWeekStart(newStartDate);
  };

  useEffect(() => {
    setSelectedDate(new Date().toISOString().split("T")[0]); // Default to today
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "1rem" }}
    >
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={() => handleWeekChange("prev")}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous Week
        </button>
        <h2 className="text-lg font-bold">
          Week of{" "}
          {new Date(currentWeek[0]).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </h2>
        <button
          onClick={() => handleWeekChange("next")}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Next Week
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <AnimatePresence>
          {currentWeek.map((date) => (
            <motion.button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`p-2 rounded ${
                date === selectedDate
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
              })}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WeeklyCalendar;
