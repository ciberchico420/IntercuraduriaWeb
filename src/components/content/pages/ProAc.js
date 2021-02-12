import React from 'react';
import './proac.scss'

export function ProAc(props) {
    return (<div className="proac-container">
        <div className="imagen"></div>
        <div className="presentacion">


            <p>Te presentamos <span>PROAC</span>, nuestro programa de acompañamientos creativos que permiten la comunicación entre artistas, curadores o algún otro agente cultural.</p>

            <p> Intercuraduria ofrece asesorías creativas para que tus proyectos tengan un mejor desarrollo.
                <br />Ten la confianza de platicar de alguna pieza que se te haya ocurrido en un espacio seguro.</p>


            <p>¿Quieres saber más de este programa?
        <br />Manda un mensaje a <a className="correo" href = "mailto: intercuraduriaproac@gmail.com">intercuraduriaproac@gmail.com</a></p>
        </div>
    </div>)
}