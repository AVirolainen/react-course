import "./MyPosts.css"
import Post from "./Post/Post"

const MyPosts=()=>{
    return(
        <div className="MyPostsBody">
            <div>            
                <p><button>Add new post</button></p>
                <textarea className="profileTextarea"></textarea>
                </div>
                <Post message="Hi. How a u?"/>
                <Post message="Good weather"/>
                <Post message="1000-7"/>
                <Post message="Za sho"/>
                
        </div>
    )
}


export default MyPosts


