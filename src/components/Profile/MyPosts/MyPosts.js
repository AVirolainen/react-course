import "./MyPosts.css"
import Post from "./Post/Post"

const MyPosts=()=>{
    return(
        <div className="MyPostsBody">
            <div>            
                <p><button>Add new post</button></p>
                <textarea className="profileTextarea"></textarea>
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
                
        </div>
    )
}


export default MyPosts


