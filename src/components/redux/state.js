const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = 'SEND_MESSAGE'

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
              ],
            newMessageText: "asdas"
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

    _sendMessage(){
        let newMessage = {
            id: "1",
            userName: 'Stas',
            userMessage: this._state.dialogsPage.newMessageText
        }
        
        this._state.dialogsPage.dialogs.push(newMessage)
        this._callSubscriber(this._state)
    },

    _updateNewMessageText(newMessage){
        this._state.dialogsPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },


    dispatch(action){
        if((action.type) === ADD_POST){
            this._addPost()
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }
        else if (action.type === SEND_MESSAGE){
            console.log("rabotaet")
            this._sendMessage()
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            
            this._updateNewMessageText(action.newMessageText)
        }
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

export const updateNewMessageTextActionCreator = (text)=>{
    
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newMessageText: text
    }
}

export const addNewMessageActionCreator = ()=>{
    
    return {
        type: 'SEND_MESSAGE',
    }
}


export default store