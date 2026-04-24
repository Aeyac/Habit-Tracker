// hooks/useHabits.js
import { useState, useCallback, useEffect } from "react"
import { load, save } from "../utils/localStorage"
import { createHabit } from "../utils/createHabit"

export default function useHabits() {
    const [habits, setHabits] = useState(() => load("habits", []))

    useEffect(() => {
        save("habits", habits)
    }, [habits])

    const create = useCallback((name, category) => {
        // console.log("create called with:", name, category)
        setHabits([...habits, createHabit(name, category)])
    }, [habits])

    const remove = useCallback((id) => {
        setHabits(habits.filter((habit) => habit.id !== id))
    }, [habits])

    const checkIn = useCallback((id) => {
        const today = new Date().toISOString().split("T")[0]
        setHabits(habits.map((habit) =>
            habit.id === id
                ? { ...habit, completions: { ...habit.completions, [today]: true } }
                : habit
        ))
    }, [habits])

    const edit = useCallback((id, name) => {
        setHabits(habits.map((habit) =>
            habit.id === id
                ? { ...habit, name: name }
                : habit
        ))
    }, [habits])

    return { habits, create, remove, checkIn, edit }
}