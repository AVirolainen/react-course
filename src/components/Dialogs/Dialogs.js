import "./Dialogs.css"

import DialogsItem from "./DialogsItem/DialogsItem"

const Dialogs=(props)=>{
    return(
        <div className="DialogsBody">
            {
                props.dialogs.map((item)=>{
                    return <DialogsItem userName={item.userName} id={item.id} userMessage={item.userMessage} />
                })
            }

        </div>
    )
}


export default Dialogs
