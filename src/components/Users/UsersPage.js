import UserCard from "./UserCard/UserCard"
import "./UsersPage.css"

const UsersPage=()=>{
    return(
        <div className="UsersPageBody">
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    )
}


export default UsersPage

