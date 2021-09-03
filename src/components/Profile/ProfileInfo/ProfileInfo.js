import "./ProfileInfo.css"
import avatar from '../../assets/avatar.jpg'

const ProfileInfo=()=>{
    return(
        <div className="ProfileInfoBody">
            <img src={avatar} className="profileAvatar"/>
            <h1>Valerii Albertovich</h1>
        </div>
    )
}


export default ProfileInfo
