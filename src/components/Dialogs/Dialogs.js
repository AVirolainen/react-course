import "./Dialogs.css"

import React from 'react';
import DialogsItem from "./DialogsItem/DialogsItem"
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from "../redux/state"

const Dialogs=(props)=>{

    const newMessageElement = React.createRef()

    const addMessage= ()=>{
        props.dispatch(addNewMessageActionCreator())
    }

    const onMessageChange= ()=>{
        let text = newMessageElement.current.value
        
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return(
        <div className="DialogsBody">
            <p><button onClick={()=>{addMessage()}}>Add new message</button></p>
            <textarea 
                    className="profileTextarea" 
                    onChange={onMessageChange} 
                    ref={newMessageElement}
                    value={props.dialogsPage.newMessageText}>
            </textarea>
            {
                props.dialogsPage.dialogs.map((item)=>{
                    return <DialogsItem userName={item.userName} id={item.id} userMessage={item.userMessage} />
                })
            }

        </div>
    )
}


export default Dialogs
