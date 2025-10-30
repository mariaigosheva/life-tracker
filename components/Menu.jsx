import React, { useEffect } from "react";

export default function Menu({ skip }) {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (skip) scrollDown();
  }, [skip]);

  const menuItems = [
    { icon: "./images/goals.svg", label: "Goals" },
    { icon: "./images/to-do-list.svg", label: "To Do List" },
    { icon: "./images/monthly-report.svg", label: "Reports", onClick: scrollDown },
    { icon: "./images/settings.svg", label: "Settings" },
    { icon: "./images/highlights.svg", label: "Highlights", highlight: true },
    { icon: "./images/new-entry.svg", label: "New Entry" },
  ];

  return (
    <div className="menu-wrapper flex flex-col items-center py-6">
      <div className="header-text-container mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Life Tracker
        </h1>
      </div>

      <div className="main-menu-container grid grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`menu-item-button flex flex-col items-center p-3 rounded-xl bg-white shadow hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all ${
              item.highlight ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="menu-icon w-10 h-10 mb-2"
            />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
