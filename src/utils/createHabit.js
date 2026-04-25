export function createHabit(name, category) {
    return {
        id: crypto.randomUUID(),
        name,
        category,
        completions: {},   // empty map — dates get added here on check-in
        createdAt: Date.now(),
    }
}