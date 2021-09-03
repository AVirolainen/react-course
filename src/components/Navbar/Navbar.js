import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar=()=>{
    return(
        <div className="NavbarBody">
            <div className="avatarImage"></div>
            <div className="usernameText">Valerii Zhmyshenko</div>
            <div className="routingBar">
                <p><NavLink to="/profile">Profile</NavLink></p>
                <p><NavLink to="/dialogs">Messages</NavLink></p>
                <p><NavLink to="#">News</NavLink></p>
                <p><NavLink to="#">Music</NavLink></p>
                <p><NavLink to="#">Settings</NavLink></p>
            </div>
        </div>
    )
}


export default Navbar




