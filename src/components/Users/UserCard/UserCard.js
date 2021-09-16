import "./UserCard.css"
import avatar1 from "../avatars/2.jpeg"

const UserCard=(props)=>{
    return(
        <div className="UserCardBody">
            <div className="userAvatarBox">
                <img src={avatar1} className="userAvatar" alt="userAvatar"/>
            </div>
            <div className="userInfoBox">
                <div className="userName">{props.userName}</div>
                <div className="userCountry">
                    {props.city}/{props.country}
                </div>
                <div className="userStatus">
                    <div className="statusText">Status: </div>{props.status}
                </div>
                {
                    props.isFollowed ?
                    <button className="btn btn1" onClick={()=>{props.toUnfollow(props.id)}}>Unfollow</button> :
                    <button className="btn btn1" onClick={()=>{props.toFollow(props.id)}}>Follow</button>

                }

            </div>
        </div>
    )
}


export default UserCard