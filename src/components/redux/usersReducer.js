const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: "1", isFollowed: true, userName: "Stasik", status:"Ogo", location:{city: "Cherkasy", country:"Ukraine"}},
        {id: "2", isFollowed: false, userName: "Andrew", status:"Ogo 2", location:{city: "Kiev", country:"Ukraine"}},
        {id: "3", isFollowed: true, userName: "Jenya", status:"Ne ogo", location:{city: "Odessa", country:"Ukraine"}},
        {id: "4", isFollowed: false, userName: "Ana", status:"Ogo", location:{city: "Poltava", country:"Ukraine"}},
        {id: "5", isFollowed: true, userName: "Stasik", status:"Ogo", location:{city: "Lviv", country:"Ukraine"}},
    ]
}

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map((user)=>{
                    if(user.id === action.userID){
                        return{...user, followed: true}
                    }
                    return user
                })
                }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map((user)=>{
                    if(user.id === action.userID){
                        return{...user, followed: false}
                    }
                    return user
                })
                }
        case SET_USERS:
            return { ...state, users:[...state.users, ...action.users]}
        default:{
            return state
        }
    }
}

export const followAC = (userID)=>{
    return {type: 'FOLLOW', userID:userID}
}

export const unfollowAC = (userID)=>{
    return {type: 'UNFOLLOW', userID:userID}
}

export const setUsersAC = (users)=>{
    return{type: 'SET_USERS', users:users}
}


export default usersReducer