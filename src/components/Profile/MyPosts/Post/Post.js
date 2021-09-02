import "./Post.css"
import avatarUser from "../../../assets/avatar2.jpg"

const Post=()=>{
    return(
        <div className="PostBody">
            
            <img src={avatarUser} className="avatarUser"/>
            <div>
                <div className="nameUser">
                    Stas Rudenko
                </div>
                <div className="textUser">
                    Smth interesting
                </div>
            </div>
            
        </div>
    )
}


export default Post


