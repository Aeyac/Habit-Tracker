// hooks/useHabits.js
import { useState, useCallback, useEffect, useReducer } from "react"
import { load, save } from "../utils/localStorage"
import { createHabit } from "../utils/createHabit"
import habitReducer, { initialState } from "../reducer/habitReducer";


export default function useHabits() {
    const [habits, dispatch] = useReducer(habitReducer, initialState, () => load("habits", []));

    useEffect(() => {
        save("habits", habits)
    }, [habits])

    const create = useCallback((name, category) => dispatch({ type: "CREATE", name, category }), [])
    const remove = useCallback((id) => dispatch({ type: "REMOVE", id }), [])
    const checkIn = useCallback((id) => dispatch({ type: "CHECK_IN", id }), [])
    const edit = useCallback((id, name) => dispatch({ type: "EDIT", id, name }), [])

    return { habits, create, remove, checkIn, edit }
}