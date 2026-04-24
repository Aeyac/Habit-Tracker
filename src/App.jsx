// App.jsx
import { useState } from 'react'
import HabitsPage from "./pages/HabitsPage"
import './App.css'
import useHabits from './hooks/useHabits'

function App() {
  const { habits, create, remove, checkIn, edit } = useHabits()

  return (
    <>
      <HabitsPage
        habits={habits}
        addHabit={create}
        onCheckIn={checkIn}
        onRemove={remove}
        onEdit={edit}
      />
    </>
  )
}

export default App