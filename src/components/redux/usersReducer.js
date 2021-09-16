const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case FOLLOW:
            console.log(state)
            return {
                ...state, 
                users: state.users.map((user)=>{
                    if(user.id === action.userID){
                        return {...user, isFollowed: true}
                    }
                    return user
                })
                }
        case UNFOLLOW:
            console.log("tyt tozhe")
            return {
                ...state, 
                users: state.users.map((user)=>{
                    if(user.id === action.userID){
                        return {...user, isFollowed: false}
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
    console.log("tyt rabotaet")
    return {type: 'FOLLOW', userID:userID}
}

export const unfollowAC = (userID)=>{
    return {type: 'UNFOLLOW', userID:userID}
}

export const setUsersAC = (users)=>{
    return{type: 'SET_USERS', users:users}
}


export default usersReducer