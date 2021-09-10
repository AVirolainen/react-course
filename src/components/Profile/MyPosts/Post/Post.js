import "./Post.css"
import avatarUser from "../../../assets/avatar2.jpg"

import { addLikeActionCreator } from "../../../redux/profileReducer"

const Post=(props)=>{

    // const addLike= ()=>{
    //     props.dispatch(addLikeActionCreator(props.id))
    // }

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
                <div className="heart" onClick={()=>{}}></div>
                
            </div>
            
        </div>
    )
}


export default Post


