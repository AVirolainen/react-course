const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
    newMessageText: "Write something..."
}

const dialogsReducer = (state = initialState, action)=>{
    switch(action.type){
        case(SEND_MESSAGE):{
            let newMessage = {
                id: "1",
                userName: 'Stas',
                userMessage: state.newMessageText
            }
            let stateCopy = {
                ...state, 
                dialogs:[...state.dialogs]};
            stateCopy.dialogs.push(newMessage)
            stateCopy.newMessageText = ' '
            return stateCopy
            
        }
        case(UPDATE_NEW_MESSAGE_TEXT):{
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessageText
            return stateCopy
        }
        default:{
            return state
        }
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


export default dialogsReducer