import React, { useEffect, useState } from 'react';
import programa from './Programas.scss'
import ReactHtmlParser from 'react-html-parser';
import { RiEditCircleFill } from 'react-icons/ri';
import {
    useHistory,
    useLocation
} from "react-router-dom";

import {FaSadTear} from "react-icons/fa"

export default function Programas(props) {
    const [activos, setActivos] = useState([]);
    const [inactivos, setInactivos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const inactiveCategory = 10;
    const sitio = "https://intercuraduria.com/tienda"

    useEffect(() => {
        fetch(sitio+"/wp-json/wp/v2/posts?categories=" + props.category + "&_embed")
            .then(res => res.json())
            .then(
                (result) => {
                    var ac = [];
                     result.forEach((v) => {
                       if (!v.categories.includes(inactiveCategory) || inactiveCategory == props.category) {
                            ac.push(v);
                        }
                    })
                    setActivos(ac);
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error", error)
                }
            )
    }, [props.category])
    return (<div><h1 className="titlePrograma"><span>{props.type}</span></h1>
        <div className="infoPrograma">
            <div className="activos-moto">
                <span className="moto">Intercuraduria ofrece programas educativos para dialogar, debatir y compartir conocimientos e inquietudes entorno a la práctica curatorial y artística desde diferentes posicionamientos actuales.</span>
            </div>
        </div>
        <div className="category">

            {activos.length > 0?activos.map((a) => {
                return (<ProgramaItem key={a.id} inactivo={props.category==inactiveCategory?true:false} type={props.type.toLowerCase()} item={a}></ProgramaItem>)
            }):<div className="no-items">Por el momento no contamos con ningún programa activo <FaSadTear/>.</div>}
        </div>
    </div>)
}
function ProgramaItem(props) {
    const [open, setOpen] = useState(false)
    const [registering, setRegistering] = useState(false)
    const history = useHistory();
    const onClick = () => {
        if (!registering) {
            setOpen(!open);
            if(open){
                history.push("/"+props.type)
            }else{
                history.push("/"+props.type+"/"+props.item.id)
            }
        }

    }
    const location = useLocation();
    const pathArr = location.pathname.split("/");

    useEffect(()=>{
        if(pathArr[2]==props.item.id){
            setOpen(true)
            console.log(pathArr)
            if(pathArr[3]== "suscribe" && props.inactivo == true){
                setRegistering(true);
            }
        }else{
            setOpen(false) 
            setRegistering(false)
        }
    },[pathArr,setOpen,props.item.id,props.inactivo])
    const onRegister = () => {
        setOpen(true)
        setRegistering(true);
        history.push("/"+props.type+"/"+props.item.id+"/suscribe")
    }
    const closeRegister = () => {
        setRegistering(false)
        setOpen(false)
        history.push("/"+props.type)
    }
    const initWidth = !open ? !props.inactivo ? "300px" : "200px" : "600px";
    const initHeight = !open ? "300px" : "1800px";
    const blur = !open ? "blur(4px)" : "blur(0px)";
    return (<div className={!props.inactivo ? "programaItem " : "programaItem inactivo"} key={props.item.id} style={{ maxWidth: initWidth, maxHeight: initHeight }}>

        <div className="itemTitle" onClick={onClick}>{props.item.title.rendered}{props.inactivo && <small> [Finalizado] </small>}</div>
        <div className="itemContent" id={!registering ? "site-content" : ""} style={{ filter: blur }}
            onClick={onClick}>{!registering ? ReactHtmlParser(props.item.content.rendered) : <Registering close={closeRegister} item={props.item}>
            </Registering>}</div>
        <div className="itemButtons">
            <div className="buttonMore" onClick={() => {
                if (registering) {
                    closeRegister();
                }
                setOpen(!open);
            }}><span  onClick={onClick}>{!open ? "Más información" : "Menos información"}</span></div>
            {!props.inactivo && <div className="buttonRegister" onClick={onRegister}><span>¡Inscríbete!</span></div>}
        </div>

    </div>)
}
function Registering(props) {
    console.log(props.item.title)
    const [enviado, setEnviado] = useState(0);
    const [datos, setDatos] = useState({
        nombre: "",
        mail: "",
        telefono: "",
        comentarios: "",
        curso: props.item.title !== undefined ? props.item.title.rendered : "Error"
    })
    const onChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }
    const enviarFormulario = () => {
        if (datos.nombre !== "" && (datos.mail !== "" || datos.telefono !== "")) {
            setEnviado(1)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            };
            fetch('http://intercuraduria.com/api/register', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

            console.log("Enviado formulario")
        } else {
            //Error
            setEnviado(2)
        }
    }

    const closeWarning = (e) => {
        setEnviado(0)
    }
    return (<div className="registerContainer">

        {(enviado === 2) && <div className="error" onClick={closeWarning}>Por favor agrega tu nombre completo y una forma de contacto <i>(Correo o teléfono)</i>.</div>}
        {(enviado === 1) && <div className="enviado">Gracias, nos pondremos en contacto contigo lo más pronto posible.</div>}
        <form>
            <h3>Registrate en {props.item.title.rendered}</h3>
            <div className="aclaracion">Después de darte de alta en este registro, nosotras te contactaremos vía mail ó WhatsApp.</div>
            <div className="input"><input name="nombre" placeholder="Nombre completo" onChange={onChange}></input></div>
            <div className="input"><input name="mail" placeholder="Email" onChange={onChange}></input></div>
            <div className="input"><input name="telefono" placeholder="Número telefónico" onChange={onChange}></input></div>
            <div className="textarea"><textarea name="comentarios" placeholder="Comentarios..." onChange={onChange}></textarea></div>
        </form>
        <div className="registerButtonsContainer"><button className="send" onClick={enviarFormulario}>Enviar</button><button className="cancel" onClick={props.close}>Cancelar</button></div>
    </div>)
}