import "./Profile.css"

import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile=(props)=>{

    return(
        <div className="ProfileBody">
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}


export default Profile
