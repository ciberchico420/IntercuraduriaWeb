import React from 'react'
import ButtonCircle from '../ButtonCircle';
import '../main.scss'
import './home.scss'
import Cursos from './pages/Cursos';

function HomeManager(props) {
    return (<div className="">
       <ButtonCircle className="empty cursosButton" buttonText="CURSOS" size={30} top={30} left={3}><Cursos></Cursos></ButtonCircle>
       <ButtonCircle className="nosotrasButton"  buttonText="NOSOTRAS" size={10} top={10} left={80}>NOSOTRAS</ButtonCircle>
    </div>)
}

export default HomeManager;