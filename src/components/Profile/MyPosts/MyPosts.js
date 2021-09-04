import "./MyPosts.css"
import React from 'react';
import Post from "./Post/Post"

const MyPosts=(props)=>{

    const newPostElement = React.createRef()

    const addPost=()=>{
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""
    }

    return(
        <div className="MyPostsBody">
            <div>            
                <p><button onClick={()=>{addPost()}}>Add new post</button></p>
                <textarea className="profileTextarea" ref={newPostElement}></textarea>
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


