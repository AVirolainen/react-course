import "./DialogsItem.css"
import avatarDialogs from "../../assets/avatar3.jpg"
import { NavLink } from "react-router-dom"

const DialogsItem=(props)=>{
    const path = '/dialogs/'+props.id
    return(
        <div className="DialogsItemBody">
            <div className="dialog">
                <div className="wrapperDialogs">
                    <img src={avatarDialogs}  className="dialogsAvatar" alt="avatar"/>
                        <div>
                        <NavLink to={path} className="dialogsName">
                            {props.userName}
                        </NavLink>
                        <div className="dialogsMessage">
                            {props.userMessage}
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default DialogsItem


