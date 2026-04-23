

export default function CheckInButoton({ isCompleted, onCheckIn }) {

    return (
        <button onClick={() => onCheckIn(!isCompleted)}> {isCompleted ? "Done" : "Mark as Done"}</button>
    )
}