
import './App.css';
import Logo from './components/Logo'
import CircleManager from './components/CircleManager'
import HomeManager from './components/home/HomeManager';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router> 
     <Logo/>
     <CircleManager></CircleManager>
     <HomeManager></HomeManager>
     </Router>
    </div>
  );
}

export default App;
