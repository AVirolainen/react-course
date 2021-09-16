import UserCard from "./UserCard/UserCard"
import "./UsersPage.css"

const UsersPage=(props)=>{
    if(props.users.length === 0){
        props.setUsers([
            {id: "1", isFollowed: true, userName: "Stasik", status:"Ogo", location:{city: "Cherkasy", country:"Ukraine"}},
            {id: "2", isFollowed: false, userName: "Andrew", status:"Ogo 2", location:{city: "Kiev", country:"Ukraine"}},
            {id: "3", isFollowed: true, userName: "Jenya", status:"Ne ogo", location:{city: "Odessa", country:"Ukraine"}},
            {id: "4", isFollowed: false, userName: "Ana", status:"Ogo", location:{city: "Poltava", country:"Ukraine"}},
            {id: "5", isFollowed: true, userName: "Stasik", status:"Ogo", location:{city: "Lviv", country:"Ukraine"}},
        ])
    }

    return(
        <div className="UsersPageBody">
            {props.users.map((item)=>{
                return <UserCard
                        id={item.id} 
                        userName={item.userName}
                        city={item.location.city}
                        country={item.location.country}
                        status={item.status}
                        isFollowed={item.isFollowed}
                        toFollow={props.follow}
                        toUnfollow={props.unfollow}/>
            })}
        </div>
    )
}


export default UsersPage

