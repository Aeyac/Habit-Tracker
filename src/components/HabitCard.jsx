

export default function HabitCard({ habit }) {

    return (
        <div>
            <p>{habit.category}</p>
            <h3> {habit.name}</h3>
            <p> {habit.pending}</p>
            <p>{habit.added}</p>
        </div>
    )
}

