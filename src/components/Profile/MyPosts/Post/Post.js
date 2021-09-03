import "./Post.css"
import avatarUser from "../../../assets/avatar2.jpg"

const Post=(props)=>{
    return(
        <div className="PostBody">
            
            <img src={avatarUser} className="avatarUser"/>
            <div>
                <div className="nameUser">
                    Stas Rudenko
                </div>
                <div className="textUser">
                    {props.message}
                </div>
                <div className="likes">
                    Likes {props.likesCount}
                </div>
            </div>
            
        </div>
    )
}


export default Post


