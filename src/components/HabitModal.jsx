
export default function HabitModal({ filter, setName, setCategory, setIsModalOpen, handleSave }) {
    
    return (
        <div>
            <h3>{`New ${filter && filter} habit`}</h3>
            <input onChange={(e) => setName(e.target.value)} placeholder="Habit name..." />
            {!filter ?
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="study">Study</option>
                    <option value="fitness">Fitness</option>
                    <option value="financial">Financial</option>
                    <option value="spiritual">Spiritual</option>
                </select>
                : setCategory(filter)
            }
            <button onClick={() => setIsModalOpen(false)}>
                Cancel
            </button>
            <button onClick={handleSave}>
                Save Habit
            </button>
        </div>
    )
}