import "./Dialogs.css"
import avatarDialogs from "../assets/avatar3.jpg"
import { NavLink } from "react-router-dom"

const Dialogs=()=>{
    return(
        <div className="DialogsBody">
            
            <div className="dialog">
            <div className="wrapperDialogs">
                <img src={avatarDialogs}  className="dialogsAvatar"/>
                    <div>
                    <NavLink to="/dialogs/1" className="dialogsName">
                        Stas
                    </NavLink>
                    <div className="dialogsMessage">
                        How a u
                    </div>
                    </div>

                </div>
            </div>

            <div className="dialog">
            <div className="wrapperDialogs">
                <img src={avatarDialogs}  className="dialogsAvatar"/>
                    <div>
                    <NavLink to="/dialogs/1" className="dialogsName">
                        Stas
                    </NavLink>
                    <div className="dialogsMessage">
                        How a u
                    </div>
                    </div>

                </div>
            </div>

            <div className="dialog">
            <div className="wrapperDialogs">
                <img src={avatarDialogs}  className="dialogsAvatar"/>
                    <div>
                    <NavLink to="/dialogs/1" className="dialogsName">
                        Stas
                    </NavLink>
                    <div className="dialogsMessage">
                        How a u
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Dialogs
