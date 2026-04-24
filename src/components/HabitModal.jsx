

export default function HabitModal({ name, setName, category, setCategory, setIsModalOpen, handleSave }) {

    return (
        <div>
            <h2>New Habit</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Habit name..."
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                <option value="study">Study</option>
                <option value="fitness">Fitness</option>
                <option value="financial">Financial</option>
                <option value="spiritual">Spiritual</option>
            </select>
            <button onClick={() => setIsModalOpen(false)}>
                Cancel
            </button>
            <button onClick={handleSave}>
                Save Habit
            </button>
        </div>
    )
}