import React, { useEffect, useState } from 'react';
import programa from './Programas.scss'
import ReactHtmlParser from 'react-html-parser';

export default function Programas(props) {
    const [activos, setActivos] = useState([]);
    const [inactivos, setInactivos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const activeCategory = 4;
    useEffect(() => {
        fetch("http://drokt.com/wordpress/wp-json/wp/v2/posts?categories=" + props.category + "&_embed")
            .then(res => res.json())
            .then(
                (result) => {
                    var ac = [];
                    var ina = [];
                    result.forEach((v) => {
                        if (v.categories.includes(activeCategory)) {
                            ac.push(v);
                        } else {
                            ina.push(v);
                        }
                    })
                    setInactivos(ina);
                    setActivos(ac);
                    setIsLoaded(true)
                    console.log(ac)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error", error)
                }
            )
    }, [props.category])
    return (<div><h1>Programa #{props.type}</h1>
        <h2>Activos</h2>
        <div className="category">

            {activos.map((a) => {
                return (<ProgramaItem item={a}></ProgramaItem>)
            })}
        </div>
        <div>Inactivos</div>
    </div>)
}
function ProgramaItem(props) {
    const [open, setOpen] = useState(false)
    const [registering, setRegistering] = useState(false)
    const onClick = () => {
        if (!registering) {
            setOpen(!open);
        }

    }
    const onRegister = () => {
        setOpen(true)
        setRegistering(true);
    }
    const closeRegister = () => {
        setRegistering(false)
        setOpen(false)
    }
    const initWidth = !open ? "300px" : "600px";
    const initHeight = !open ? "300px" : "1800px";
    const blur = !open ? "blur(4px)" : "blur(0px)";
    return (<div className="programaItem" key={props.item.id} style={{ maxWidth: initWidth, maxHeight: initHeight }}>

        <div className="itemTitle" onClick={onClick}>{props.item.title.rendered}</div>
        <div className="itemContent" id={!registering ? "site-content" : ""} style={{ filter: blur }}
            onClick={onClick}>{!registering ? ReactHtmlParser(props.item.content.rendered) : <Registering close={closeRegister} item={props.item}>
            </Registering>}</div>
        <div className="itemButtons">
            <div className="buttonMore" onClick={() => {
                if (registering) {
                    closeRegister();
                }
                setOpen(!open);
            }}><span>{!open ? "Más información" : "Menos información"}</span></div>
            <div className="buttonRegister" onClick={onRegister}><span>¡Inscríbete!</span></div>
        </div>

    </div>)
}
function Registering(props) {
    const [enviado,setEnviado] = useState(0);
    const [datos,setDatos] = useState({
        nombre:"",
        mail:"",
        telefono:"",
        comentarios:""
    })
    const onChange =(e)=>{
        setDatos({...datos,[e.target.name]:e.target.value})
        console.log(datos)
    }
    const enviarFormulario = ()=>{
        if(datos.nombre !== "" && (datos.mail !== "" || datos.telefono !== "")  ){
            setEnviado(1)
        }else{
            setEnviado(2)
            
        }
    }

    const closeWarning =(e)=>{
        setEnviado(0)
    }
    return (<div className="registerContainer">
        <h3>Registrate para {props.item.title.rendered}</h3>
        <div className="aclaracion">Después de darte de alta en este registro, nosotras te contactaremos vía mail ó WhatsApp.</div>
        {(enviado===2)&&<div className="error" onClick={closeWarning}>Por favor agrega tu nombre completo y una forma de contacto <i>(Correo o teléfono)</i>.</div>}
        {(enviado===1)&&<div className="enviado">Gracias, nos pondremos en contacto contigo lo más pronto posible.</div>}
        <form>
            <div className="input"><input name="nombre" placeholder="Nombre completo" onChange={onChange}></input></div>
            <div className="input"><input name="mail" placeholder="Email" onChange={onChange}></input></div>
            <div className="input"><input name="telefono" placeholder="Número telefónico" onChange={onChange}></input></div>
            <div className="textarea"><textarea  name="comentarios" placeholder="Comentarios..." onChange={onChange}></textarea></div>
        </form>
        <div className="registerButtonsContainer"><button className="send" onClick={enviarFormulario}>Enviar</button><button className="cancel" onClick={props.close}>Cancelar</button></div>
    </div>)
}