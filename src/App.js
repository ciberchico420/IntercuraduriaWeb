
import './App.css';
import Logo from './components/Logo'
import CircleManager from './components/CircleManager'
import HomeManager from './components/home/HomeManager';

function App() {
  return (
    <div className="App">
     <Logo/>
     <CircleManager></CircleManager>
     <HomeManager></HomeManager>
    </div>
  );
}

export default App;
