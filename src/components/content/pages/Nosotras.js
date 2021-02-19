import react from 'react'
import './Nosotras.scss'
export default function Nosotras(props) {
    return (<div className="nosotras">
        <div className="info">
        <p className="title">Nosotras</p>
        <p>Somos un grupo de curadoras interesadas en abordar la Curaduría desde diferentes escenarios, enfoques y circunstancias contemporáneas, tanto en México como en diferentes latitudes de Latinoamérica.</p>
        <p>Intercuraduría se establece como una plataforma digital y laboratorio curatorial para dialogar, debatir y compartir conocimientos e inquietudes entorno a la práctica curatorial desde diferentes posicionamientos actuales.
             A partir de nuestro programa compuesto de cursos y talleres, elaborados desde diversos imaginarios y realidades de la cultura contemporánea, evidenciamos la dimensión curatorial desde diferentes campos de acción.</p>

        </div>
        <Integrantes></Integrantes>
    </div>)
}

export function Integrantes() {
    return (<div className="integrantes">
        <div className="integrante"><span>Emlya Rendon</span></div>
        <div className="integrante"><span>Adriana Flores</span></div>
    </div>)
}