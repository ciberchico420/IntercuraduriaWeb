import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ButtonCircle from '../ButtonCircle';
import '../main.scss'
import './home.scss'
import PageFromCategory from './pages/PageFromCategory';

function HomeManager(props) {
    return (<div className="">
        
        <ButtonCircle className="cursosButton" empty={true} section="cursos" buttonText="CURSOS" size={30} top={30} left={3}><PageFromCategory category="2"></PageFromCategory></ButtonCircle>
       <ButtonCircle className="nosotrasButton" empty={false} section="nosotras" buttonText="NOSOTRAS" size={10} top={10} left={80}><PageFromCategory category="5"></PageFromCategory></ButtonCircle>
        
      
    </div>)
}

export default HomeManager;