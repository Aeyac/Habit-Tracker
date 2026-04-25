import { useState } from "react";
import CheckInButton from "./CheckInButton";
import EditHabitButton from "./EditHabitButton";
import RemoveHabitButton from "./RemoveHabitButton";

export default function HabitCard({ habit, onCheckIn, onRemove, onEdit }) {
    const today = new Date().toISOString().split("T")[0]
    const isCompleted = habit.completions[today] === true
    const [isEdit, setIsEdit] = useState(false);
    const [editName, setEditName] = useState(habit.name)
    const habitDate = new Date(habit.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

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
            <p style={{fontSize: "24px", fontWeight: "bold"}}>  {habit.name}</p>
            <p>{habit.category}</p>
            <p style={{ color: "white", fontSize: "12px" }} >{`Added at: ${habitDate}`}</p>

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
                <EditHabitButton isEdit={isEdit} onEdit={handleEdit} onEnableEdit={handleEnableEdit} />
            }

        </div>
    )
}