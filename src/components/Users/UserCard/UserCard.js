import "./UserCard.css"
import avatar1 from "../avatars/2.jpeg"

const UserCard=()=>{
    return(
        <div className="UserCardBody">
            <div className="userAvatarBox">
                <img src={avatar1} className="userAvatar" alt="userAvatar"/>
            </div>
            <div className="userInfoBox">
                <div className="userName">Stas Rudenko</div>
                <div className="userCountry">
                    Kiev/Ukraine
                </div>
                <div className="userStatus">
                    <div className="statusText">Status: </div>   Looking for friends
                </div>
                <button className="btn btn1">
                    Follow
                </button>
            </div>
        </div>
    )
}


export default UserCard