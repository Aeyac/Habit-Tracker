// App.jsx
import { useState } from 'react'
import HabitsPage from "./pages/HabitsPage"
import './App.css'
import useHabits from './hooks/useHabits'
import Navbar from './components/NavBar'
import DashboardPage from './pages/DashboardPage';
import { Routes, Route } from "react-router-dom";

function App() {
  const { habits, create, remove, checkIn, edit } = useHabits()

  return (
    <>

      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/habits" element={<HabitsPage
            habits={habits}
            onCreate={create}
            onCheckIn={checkIn}
            onRemove={remove}
            onEdit={edit}
          />} />
        </Routes>
      </div>


    </>
  )
}

export default App