import './App.css';
import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs"
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
          <div className="wrapper">
            <Navbar />
      
            <Route exact path="/dialogs" render={()=><Dialogs 
              dialogs={props.appState.dialogsPage.dialogs}/>} />
              
            <Route path="/profile" render={()=><Profile 
              profilePage={props.appState.profilePage} 
              dispatch={props.dispatch}/>} />

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
