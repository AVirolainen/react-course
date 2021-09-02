import "./Profile.css"
import avatar from '../assets/avatar.jpg'

import MyPosts from "./MyPosts/MyPosts"

const Profile=()=>{
    return(
        <div className="ProfileBody">
            <img src={avatar} className="profileAvatar"/>
            <h1>Valerii Albertovich</h1>
            <MyPosts />
        </div>
    )
}


export default Profile
