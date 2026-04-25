

export default function CheckInButoton({ isCompleted, onCheckIn }) {

    return (
        isCompleted ? <p style={{ fontSize: "14px", color: "green", fontWeight: "bold" }} >Done</p> : <button onClick={onCheckIn}> Mark as Done</button>
    )
}