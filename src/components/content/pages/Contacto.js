import React from 'react';
import './Contacto.scss'

export function Contacto() {
    return (<div className="contacto">
        <div className="formulario">
            <h2>¡Únete a nuestra comunidad!</h2>
            <form>
                <input name="nombre" placeholder="Nombre"></input>
                <input name="correo" placeholder="Correo"></input>
                <textarea placeholder="Déjanos un comentario..."></textarea>
                <div className="button">Enviar</div>
            </form>

        </div>
        <div className="mandanos-un-mail"><p>¿Tienes algún taller que te gustaría proponernos?</p>
            <p>Mándanos un correo a <b>contacto@intercuraduria.com</b></p></div>
    </div>)
}