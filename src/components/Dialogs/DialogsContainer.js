import Dialogs from './Dialogs';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from "../redux/dialogsReducer"
import { connect } from 'react-redux';

let mapStateToProps = (state)=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessageText: (text)=>{
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: ()=>{
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer



