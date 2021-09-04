import {rerenderEntireTree} from '../../render'

let state = {
    profilePage:{
        posts: [
            {
                id: '1',
                postMessage: "Hi. How a u?",
                likesCount: 112
            },
            {
                id: '2',
                postMessage: "1000-7",
                likesCount: 12
            },
            {
                id: '3',
                postMessage: "993-7",
                likesCount: 11
            },
            {
                id: '4',
                postMessage: "986-7",
                likesCount: 7
            },
          ],
    },
    dialogsPage:{
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
          ]
    },
    sideBar: {}

}

export let addPost = (postMessage)=>{
    let newPost = {
        id: 5,
        postMessage: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    
    rerenderEntireTree(state)
}

export default state