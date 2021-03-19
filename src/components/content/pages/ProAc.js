import React from 'react';
import './proac.scss'

export function ProAc(props) {
    return (<div className="proac-container">
        <div className="proac-card">
            <div className="imagen"></div>
            <div className="presentacion">

                <p>Programa de Acompañamiento Creativo</p>
                <p>Te presentamos <span>PROAC</span>, nuestro programa de acompañamientos creativos que permiten 
                la comunicación entre artistas, curadores o algún otrx agente cultural.</p>

                <p> PROAC te ofrece un espacio seguro y privado de asesoramiento personalizado para potenciar tus proyectos.</p>
                <p>Todas las ideas son buenas por lo cual hay que cuidarlas, procurarlas y potenciarlas.</p>


                <p>¿Quieres saber más de este programa?
                    <br />Manda un mensaje a <a className="correo" href="mailto: intercuraduriaproac@gmail.com">intercuraduriaproac@gmail.com</a></p>
            </div>
        </div>

    </div>)
}