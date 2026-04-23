


export default function createHabit(habit) {
    return {
        id: habit.id,
        name: habit.name,
        category: habit.category,
        pending: true,
        completions: {
 
        },
        added: Date.now()
    }
}