import React,{useState} from 'react';
import './Contacto.scss'

export function Contacto() {
    const [datos, setDatos] = useState({
        nombre: "",
        mail: "",
        comentarios: "",
    })

    const enviarFormulario = () => {
        console.log("Datos",datos)
        if (datos.nombre !== "" && (datos.mail !== "")) {
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            };
            fetch('https://intercuraduria.com/api/contacto', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

            console.log("Enviado formulario")
        } else {
            //Error
           
        }
    }

    const onChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }

    return (<div className="contacto">
        <div className="formulario">
            <h2>¡Únete a nuestra comunidad!</h2>
            <form>
                <input onChange={onChange} name="nombre" placeholder="Nombre"></input>
                <input onChange={onChange}  name="mail" placeholder="Correo"></input>
                <textarea onChange={onChange}  placeholder="Déjanos un comentario..." name="comentarios"></textarea>
                <div className="button" onClick={enviarFormulario}>Enviar</div>
            </form>

        </div>
        <div className="mandanos-un-mail"><p>¿Tienes algún taller que te gustaría proponernos?</p>
            <p>Mándanos un correo a <b>contacto@intercuraduria.com</b></p></div>
    </div>)
}