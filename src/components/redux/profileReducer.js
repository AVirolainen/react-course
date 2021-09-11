const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_LIKE = 'ADD_LIKE'

let initialState={
    posts: [
        {
            id: '1',
            postMessage: "Hi. How a u?",
            likesCount: 112
        },
        {
            id: '2',
            postMessage: "1000-7",
            likesCount: 12
        },
        {
            id: '3',
            postMessage: "993-7",
            likesCount: 11
        },
        {
            id: '4',
            postMessage: "986-7",
            likesCount: 7
        },
      ],
    newPostText: "a new post?"
}

const profileReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                postMessage: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ' '
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state
        
    }
}

export const addPostActionCreator = ()=>{
    return {
        type: 'ADD_POST'
    }
}

export const updateNewPostActionCreator = (text)=>{
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}

export const addLikeActionCreator = (messageId)=>{
    return {
        type: 'ADD_LIKE',
        id: messageId
    }
}

export default profileReducer