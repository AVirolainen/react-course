import "./MyPosts.css"
import React from 'react';
import Post from "./Post/Post"
import { updateNewPostActionCreator, addPostActionCreator } from "../../redux/state";

const MyPosts=(props)=>{

    const newPostElement = React.createRef()

    const addPost=()=>{
        props.dispatch(addPostActionCreator())
        newPostElement.current.value = " "
    }

    const onPostChange=()=>{
        let text = newPostElement.current.value
        props.dispatch(updateNewPostActionCreator(text))
    }

    return(
        <div className="MyPostsBody">
            <div>            
                <p><button onClick={()=>{addPost()}}>Add new post</button></p>
                <textarea 
                    className="profileTextarea" 
                    onChange={onPostChange} 
                    ref={newPostElement}
                    value={props.newPostText}></textarea>
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


