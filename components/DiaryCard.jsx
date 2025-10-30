// components/DiaryCard.jsx
import React from "react";

export default function DiaryCard({ date, title, text, mood }) {
  return (
    <article className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all dark:bg-slate-800 dark:text-white">
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300">{text}</p>
      <div className="mt-4 text-2xl">{mood}</div>
    </article>
  );
}
