import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar=()=>{
    return(
        <div className="NavbarBody">
            <div className="avatarImage"></div>
            <div className="usernameText">Valerii Zhmyshenko</div>
            <div className="routingBar">
                <NavLink to="/profile" className="navLinkStyling">Profile</NavLink>
                <NavLink to="/dialogs" className="navLinkStyling">Messages</NavLink>
                <NavLink to="#" className="navLinkStyling">News</NavLink>
                <NavLink to="#" className="navLinkStyling">Music</NavLink>
                <NavLink to="#" className="navLinkStyling">Settings</NavLink>
            </div>
        </div>
    )
}


export default Navbar




