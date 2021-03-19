import react from 'react'
import './Nosotras.scss'
import Emi from '../../../assets/img/Emi.png'
import Adriana from '../../../assets/img/Adriana.png'
import Circulo from '../../../assets/img/circulo.png'
export default function Nosotras(props) {
    return (<div className="nosotras">
        <div className="info">
           
            <p>Somos un grupo de curadoras interesadas en abordar la Curaduría desde diferentes escenarios, enfoques y circunstancias contemporáneas, tanto en México como en diferentes latitudes de Latinoamérica.</p>
            <p><b>Intercuraduría</b> se establece como una plataforma digital y laboratorio curatorial para dialogar, debatir y compartir conocimientos e inquietudes entorno a la práctica curatorial desde diferentes posicionamientos actuales.
             A partir de nuestro programa compuesto de cursos y talleres, elaborados desde diversos imaginarios y realidades de la cultura contemporánea, evidenciamos la dimensión curatorial desde diferentes campos de acción.</p>
           
        </div>
        <Integrantes></Integrantes>
    </div>)
}

export function Integrantes() {
    return (<div className="integrantes">
       <Integrante foto={Emi} des1={"Artista y curadora independiente"} des2="Co fundadora de Intercuraduria"></Integrante>
       <Integrante foto={Adriana} des1={"Gestora Cultural y curadora independiente"} des2="Co fundadora de Intercuraduria"></Integrante>
      
    </div>)
}

export function Integrante({foto,des1,des2}) {
    return (<div className="integrante"><img src={ foto}></img>
    <div className="int-info">
        <p><b>{des1}</b></p>
        <p><i>{des2}</i></p>
    </div>
    </div>)
}