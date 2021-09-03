import "./Profile.css"

import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile=(props)=>{

    return(
        <div className="ProfileBody">
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}


export default Profile
