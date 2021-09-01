import './App.css';
import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="wrapper">
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
