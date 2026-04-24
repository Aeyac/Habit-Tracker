import { useState } from "react";
import CheckInButton from "./CheckInButton";
import EditHabitButton from "./EditHabitButton";
import RemoveHabitButton from "./RemoveHabitButton";

export default function HabitCard({ habit, onCheckIn, onRemove, onEdit }) {
    const today = new Date().toISOString().split("T")[0]
    const isCompleted = habit.completions[today] === true
    const [isEdit, setIsEdit] = useState(false);
    const [editName, setEditName] = useState(habit.name)

    const handleCheckIn = () => {
        const confirmed = window.confirm(
            `Mark "${habit.name}" as done for today?`
        )
        if (confirmed) onCheckIn(habit.id)
    }

    const handleRemove = () => {
        const confirmed = window.confirm(
            `Are you sure you want to remove "${habit.name}"?`
        )
        if (confirmed) onRemove(habit.id)
    }

    const handleEnableEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleEdit = () => {
        onEdit(habit.id, editName)
        setIsEdit(false)  // close edit mode after saving
    }

    return (
        <div>
            <h3>{habit.name}</h3>
            <p>{habit.category}</p>
            <CheckInButton
                isCompleted={isCompleted}
                onCheckIn={handleCheckIn}
            />
            <RemoveHabitButton
                onRemove={handleRemove}
            />
            {isEdit && <>
                <input onChange={(e) => setEditName(e.target.value)} placeholder="put the text here"></input>
            </>}
            {!isCompleted &&
                <EditHabitButton isEdit={isEdit} onEdit={handleEdit} onEneableEdit={handleEnableEdit} />
            }

        </div>
    )
}