import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <nav >
            <div >
                <Link to="/"> Habit Tracker</Link>
                <div >
                    <Link to="/"> Dashboard</Link>
                    <Link to="/habits"> Habits</Link>
                    <Link to="/progress"> Progress</Link>
                </div>
            </div>
        </nav>
    )
}