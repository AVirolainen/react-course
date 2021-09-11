import "./Dialogs.css"

import React from 'react';
import DialogsItem from "./DialogsItem/DialogsItem"


const Dialogs=(props)=>{

    const newMessageElement = React.createRef()

    const onAddMessage= ()=>{
        props.addMessage()
        newMessageElement.current.value = " "
    }

    const onMessageChange= ()=>{
        let text = newMessageElement.current.value
        
        props.updateNewMessageText(text)
        newMessageElement.current.value = " "
        
    }

    return(
        <div className="DialogsBody">
            <p><button onClick={()=>{onAddMessage()}}>Add new message</button></p>
            <textarea 
                    className="profileTextarea" 
                    onChange={onMessageChange} 
                    ref={newMessageElement}
                    value={props.newMessageText}>
            </textarea>
            {
                props.dialogs.map((item)=>{
                    return <DialogsItem userName={item.userName} id={item.id} userMessage={item.userMessage} />
                })
            }

        </div>
    )
}


export default Dialogs
