

export default function EditHabitButton({ isEdit, onEdit, onEneableEdit }) {

    return (
        <div>


            {isEdit ?
                <>
                    <button onClick={onEneableEdit}> Cancel </button>
                    <button onClick={onEdit}> Submit</button>
                </>
                :
                <button onClick={onEneableEdit}> Edit</button>}
        </div>
    )
}