import react from 'react'
import './Nosotras.scss'
import Emi from '../../../assets/img/Emi.png'
import Adriana from '../../../assets/img/Adriana.png'
import Circulo from '../../../assets/img/circulo.png'
export default function Nosotras(props) {
    return (<div className="nosotras">
         <Integrantes></Integrantes>
        <div className="info">

            <p>Intercuraduría es un proyecto curatorial para dialogar, debatir y compartir conocimientos e inquietudes en torno a la práctica curatorial desde diferentes posicionamientos actuales.</p>
            <p>La plataforma está compuesta por una sección de textos, un laboratorio para la exploración curatorial, un programa que busca explorar otras formas de hacer curaduría, bajo la idea de acompañamiento creativo, cursos y talleres que toman en cuenta otras voces para crear redes de apoyo que permitan economías solidarias, pandémicas y post-pandémicas. </p>
        </div>
        <div className="info"><p>Intercuraduria comenzó con el interés compartido de Emilya Rendón y Adriana Flores por hacer una revisión histórica de la práctica curatorial en México por mujeres dentro del campo del arte, lo que culminó con un encuentro entre voces femeninas que desempeñan la curaduría desde distintos ámbitos.</p>
           <p> Después de esta primera iniciativa, nuevas inquietudes surgieron entorno a la práctica curatorial: ¿Qué entendemos por curaduría hoy en día?, ¿Cómo se realiza la curaduría de manera independiente?, ¿Cómo se inserta la curaduría dentro de un programa educativo?, ¿Cuáles son las distintas metodologías para hacer curaduría?, ¿La curaduría se puede llevar más allá del campo artístico? y finalmente, ¿Cuál es el devenir de la curaduría?.</p>
           <p> A partir de estas inquietudes, surge Intercuraduria como un proyecto curatorial con una plataforma digital que permite la investigación a partir del intercambio de ideas, prácticas experimentales y aproximaciones sobre el quehacer curatorial desde diferentes latitudes y perspectivas.</p>
           </div>
       
    </div>)
}

export function Integrantes() {
    return (<div className="integrantes">
        <Integrante foto={Emi} des1={"Artista y curadora independiente"} des2="Co fundadora de Intercuraduria" nombre={"Emiliya Rendón"}></Integrante>
        <Integrante foto={Adriana} des1={"Gestora cultural y curadora independiente"} des2="Co fundadora de Intercuraduria"  nombre={"Adriana Flores"}></Integrante>

    </div>)
}

export function Integrante({ foto, des1, des2,nombre }) {
    return (<div className="integrante"><img src={foto}></img>
        <div className="int-info">
            <p>{nombre}</p>
            <p><b>{des1}</b></p>
            <p><i>{des2}</i></p>
        </div>
    </div>)
}