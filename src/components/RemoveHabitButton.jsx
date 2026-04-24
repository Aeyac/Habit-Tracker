

export default function RemoveHabitButton({ onRemove }) {

    return (
        <button onClick={onRemove} style={{color: "#fd0000", backgroundColor: "none"}}> Remove </button>
    )
}