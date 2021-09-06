const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let store = {

    _state: {
        profilePage:{
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
        },
        dialogsPage:{
            dialogs: [
                {
                    id: "1",
                    userName: 'Stas',
                    userMessage: '1000-7'
                },
                {
                    id: "2",
                    userName: 'Vlad',
                    userMessage: '993-7'
                },
                {
                    id: "3",
                    userName: 'Ira',
                    userMessage: '986-7'
                },
                {
                    id: "4",
                    userName: 'Kolya',
                    userMessage: '979-7'
                },
              ]
        },
        sideBar: {}
    
    },
    _callSubscriber(){
        console.log('State is changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    _addPost(){
        let newPost = {
            id: 5,
            postMessage: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action){
        if((action.type) === ADD_POST){
            this._addPost()
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }
    }
}

export const addPostActionCreator = ()=>{
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostActionCreator = (text)=>{
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}


export default store