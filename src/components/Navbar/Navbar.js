import "./Navbar.css"

const Navbar=()=>{
    return(
        <div className="NavbarBody">
            <div className="avatarImage"></div>
            <div className="usernameText">Valerii Zhmyshenko</div>
            <div className="routingBar">
                <p><a href="#">Profile</a></p>
                <p><a href="#">Messages</a></p>
                <p><a href="#">News</a></p>
                <p><a href="#">Music</a></p>
                <p><a href="#">Settings</a></p>
            </div>
        </div>
    )
}


export default Navbar




