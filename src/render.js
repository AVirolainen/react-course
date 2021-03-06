import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./components/redux/state.js"
import {addPost, updateNewPostText} from "./components/redux/state.js"

export let rerenderEntireTree =(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}