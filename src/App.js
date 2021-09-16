import './App.css';
import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersPageContainer from './components/Users/UsersPageContainer';



function App(props) {
  return (
    
      <div className="App">
        <div>
          <Header />
          <div className="wrapper">
            <Navbar />
            <Route exact path="/dialogs" render={()=><DialogsContainer/>} />
            <Route path="/profile" render={()=><Profile />} />
            <Route path="/users" render={()=><UsersPageContainer />} />

          </div>
        </div>
      </div>
    
  );
}

export default App;
