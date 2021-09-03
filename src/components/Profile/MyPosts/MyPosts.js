import "./MyPosts.css"
import Post from "./Post/Post"

const MyPosts=(props)=>{

    return(
        <div className="MyPostsBody">
            <div>            
                <p><button>Add new post</button></p>
                <textarea className="profileTextarea"></textarea>
                </div>
                {
                    props.posts.map(item=>{
                        return <Post message={item.postMessage} id={item.id} likesCount={item.likesCount} />
                    })
                }
                
        </div>
    )
}


export default MyPosts


