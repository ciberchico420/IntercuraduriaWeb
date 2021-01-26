
import './App.css';
import ContentManager from './components/content/ContentManager'
import CircleManager from './components/CircleManager'
import HomeManager from './components/home/HomeManager';
import { BrowserRouter as Router } from 'react-router-dom'
import SideContentManager from './components/content/SideContentManager';

function App() {
  return (
    <div className="App">
      
      <Router>
        <HomeManager></HomeManager>
        <ContentManager></ContentManager>
        <SideContentManager></SideContentManager>
      </Router>
      <CircleManager></CircleManager>
    </div>
  );
}

export default App;
