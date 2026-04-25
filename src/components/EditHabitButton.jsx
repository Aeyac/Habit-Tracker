

export default function EditHabitButton({ isEdit, onEdit, onEnableEdit }) {

    return (
        <div>


            {isEdit ?
                <>
                    <button onClick={onEnableEdit}> Cancel </button>
                    <button onClick={onEdit}> Submit</button>
                </>
                :
                <button onClick={onEnableEdit}> Edit</button>}
        </div>
    )
}