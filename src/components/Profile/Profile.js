import "./Profile.css"

import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile=(props)=>{

    return(
        <div className="ProfileBody">
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}


export default Profile
