import React from 'react'
import ButtonCircle from '../ButtonCircle';
import '../main.scss'
import './home.scss'

function HomeManager(props) {
    return (<div className="">
       <ButtonCircle className="empty cursosButton" size={20}>CURSOS</ButtonCircle>
       <ButtonCircle className="nosotrasButton" size={10}>NOSOTRAS</ButtonCircle>
    </div>)
}

export default HomeManager;