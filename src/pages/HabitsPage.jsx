// pages/HabitsPage.jsx
import { useEffect, useState } from "react"
import HabitCard from "../components/HabitCard"
import HabitModal from "../components/HabitModal"
import FilterBar from "../components/FilterBar"

export default function HabitsPage({ habits, onCreate, onCheckIn, completed, onRemove, onEdit }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [filter, setFilter] = useState("")

    const handleSave = () => {
        if (!name.trim() || !category) return
        onCreate(name, category)
        setName("")
        setCategory("")
        setIsModalOpen(false)
    }

    const visibleHabits = habits.filter(habit =>
        filter === "" ? true : habit.category === filter
    )

    return (
        <div>
            <h1>Habits Page</h1>
            <FilterBar onSetFilter={setFilter} />   
            <button style={{marginBottom: "14px"}}  onClick={() => setIsModalOpen(true)}>
                Add Habit
            </button>

            {visibleHabits.length > 0 ? (
                visibleHabits.map((h) => (
                    <HabitCard key={h.id} habit={h} onCheckIn={onCheckIn} onRemove={onRemove} onEdit={onEdit} />
                ))
            ) : (
                <p>No habits yet...</p>
            )}

            {isModalOpen &&
                <HabitModal filter={filter} setName={setName} setCategory={setCategory} setIsModalOpen={setIsModalOpen} handleSave={handleSave} />
            }

        </div>
    )
}