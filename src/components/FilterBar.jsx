

export default function FilterBar({ onSetFilter }) {

    return (
        <select onChange={(e) => onSetFilter(e.target.value)}>
            <option value="">All Category</option>
            <option value="study">Study</option>
            <option value="fitness">Fitness</option>
            <option value="financial">Financial</option>
            <option value="spiritual">Spiritual</option>
        </select>
    )
}