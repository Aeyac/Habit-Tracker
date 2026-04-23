import { useState } from 'react';
import HabitsPage from "./pages/HabitsPage";
import DashboardPage from "./pages/DashboardPage";
import './App.css'
import { load } from "./utils/localStorage";



function App() {
  const habits = load("habits", []);

  return (
    <>
      <HabitsPage habit={habits}/>
    </>
  )
}

export default App
