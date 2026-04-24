// pages/HabitsPage.jsx
import { useState } from "react"
import HabitCard from "../components/HabitCard"
import HabitModal from "../components/HabitModal"

export default function HabitsPage({ habits, addHabit, onCheckIn, completed, onRemove, onEdit }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")

    const handleSave = () => {
        if (!name.trim() || !category) return
        addHabit(name, category)
        setName("")
        setCategory("")
        setIsModalOpen(false)
    }

    return (
        <div>
            <h1>Habits</h1>

            <button onClick={() => setIsModalOpen(true)}>
                Add Habit
            </button>

            {habits.length > 0 ? (
                habits.map((h) => (
                    <HabitCard key={h.id} habit={h} onCheckIn={onCheckIn} onRemove={onRemove} onEdit={onEdit} />
                ))
            ) : (
                <p>No habits yet...</p>
            )}

            {isModalOpen &&
                <HabitModal name={name} setName={setName} category={category}
                    setCategory={setCategory} setIsModalOpen={setIsModalOpen} handleSave={handleSave} />
            }

        </div>
    )
}