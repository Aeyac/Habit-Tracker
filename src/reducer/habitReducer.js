import { createHabit } from "../utils/createHabit"


export const initialState = {
    selectedId: 0,
    name: "default text"
}

export default function habitReducer(state, action) {
    const today = new Date().toISOString().split("T")[0]


    switch (action.type) {
        case 'CREATE': return [...state, createHabit(action.name, action.category)]
        case 'REMOVE': return state.filter((habit) => habit.id !== action.id)
        case 'EDIT': return state.map((habit) => habit.id === action.id ? { ...habit, name: action.name } : habit)
        case 'CHECK_IN':
            return state.map((habit) =>
                habit.id === action.id ? { ...habit, completions: { ...habit.completions, [today]: true } } : habit)
    }
}