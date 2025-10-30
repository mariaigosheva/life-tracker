import React from "react";
import diaryData from "./diaryData";
import DiaryCard from "./components/DiaryCard";
import Menu from "./components/Menu";

export default function App() {
  const diaryCardElements = diaryData.map(day => (
    <DiaryCard key={day.id} {...day} />
  ));

  return (
    <div>
      <Menu skip={false} />
      <main className="main-container">
        <div className="sub-header">
          <h3>April Reports</h3>
        </div>
        <section className="diary-cards">
          {diaryCardElements.length > 0 ? diaryCardElements : <p>No diary entries yet.</p>}
        </section>
      </main>
    </div>
  );
}
