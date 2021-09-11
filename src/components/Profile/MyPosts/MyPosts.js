import "./MyPosts.css"
import React from 'react';
import Post from "./Post/Post"

const MyPosts=(props)=>{

    const newPostElement = React.createRef()

    const onAddPost=()=>{
        props.addPost()
        newPostElement.current.value = " "
    }

    const onPostChange=()=>{
        let text = newPostElement.current.value
        props.updateNewPostText(text)
       
    }

    return(
        <div className="MyPostsBody">
            <div>            
                <p><button onClick={()=>{onAddPost()}}>Add new post</button></p>
                <textarea 
                    className="profileTextarea" 
                    onChange={onPostChange} 
                    ref={newPostElement}
                    value={props.newPostText}>

                </textarea>
                </div>
                {
                    props.posts.map(item=>{
                        return <Post message={item.postMessage} id={item.id} likesCount={item.likesCount}/>
                    })
                }
                
        </div>
    )
}


export default MyPosts


