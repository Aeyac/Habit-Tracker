import { useState } from "react";
import CheckInButton from "../components/CheckInButton";
import HabitCard from "../components/HabitCard";
import AddHabitButton from "../components/AddHabitButton";

export default function HabitsPage({ habit }) {
    const [completed, setCompleted] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="page-container">
            <h1>Habits Page</h1>

            <button onClick={() => setIsModalOpen(true)}> Click here to add habits</button>

            {habit.length > 0 ? (
                <div>
                    {habit.map((h) => <HabitCard key={h.id} habit={h} />)}
                    <CheckInButton isCompleted={completed} onCheckIn={setCompleted} />
                </div>
            ) : (
                <p>No habits listed...</p>
            )}


            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>New Habit</h2>
                        <input className="modal-input" placeholder="Habit name..." />
                        <input className="modal-input" placeholder="Category..." />

                        <div className="modal-actions">
                            <button onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button className="save-btn" onClick={() => setIsModalOpen(false)}>
                                Save Habit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}