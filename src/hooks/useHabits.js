import { load, save } from "../utils/localStorage";
import { createHabit } from "../utils/createHabit";
import { useCallback, useEffect } from "react";

export default function useHabit() {
    const { habits, setHabits } = load("habits", []);

    useEffect(() => {
        if (habits < 1) {
            return;
        };
        save("habits", habits);
    }, [habits])


    const create = useCallback((habit) => {
        if (habit === null) return
        setHabits([...habits, createHabit(habit)]);
    }, [habits])

    const remove = useCallback((id) => {
        const tempHabits = habits.filter((habit) => {
            if (habit.id !== id) return habit
        });
        setHabits([...habits, tempHabits]);
    }, [habits])

    const edit = (id) => {

    }

    return { create, remove, edit }
}