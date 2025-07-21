import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {


    return (<>
    
        <nav>

            <h2>Dance instructor application</h2>

            <ul>

                <li>
                    <NavLink to="/" end className="nav-bar">Home</NavLink>
                </li>

                <li>
                    <NavLink to="getAllInstructors" className="nav-bar">Instructors details</NavLink>
                </li>

            </ul>

        </nav>

    </>)
}

export default NavBar;