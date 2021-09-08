import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

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

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}



export default store