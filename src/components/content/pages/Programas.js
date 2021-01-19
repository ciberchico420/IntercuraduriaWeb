import React, { useEffect, useState } from 'react';
import programa from './Programas.scss'
import ReactHtmlParser from 'react-html-parser';
import { RiEditCircleFill } from 'react-icons/ri';
import {
    useHistory,
    useLocation
} from "react-router-dom";

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
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error", error)
                }
            )
    }, [props.category])
    return (<div><h1 className="titlePrograma"><span>Programa #{props.type}</span></h1>
        <div className="infoPrograma">
            <div className="activos-moto">
                <span><RiEditCircleFill className="icon"></RiEditCircleFill></span>
                <span className="moto">Aenean ut elementum diam, nec pharetra orci. Phasellus dignissim justo lectus, vel rhoncus nisi placerat accumsan. Aenean mollis nisi a mauris cursus, ac mattis nisi commodo. Maecenas eget nisl vestibulum, placerat ligula eget, ornare massa. Maecenas in eleifend elit. Mauris quis neque commodo, viverra eros quis, fermentum velit. Ut consectetur urna non viverra lobortis. In at congue nisi. Donec iaculis ipsum ac risus varius rhoncus. Donec in eros et nisl porttitor hendrerit quis at est. Sed volutpat velit eu eleifend vestibulum. Maecenas aliquet convallis molestie. Ut vulputate erat vitae risus aliquam consequat non quis ante.</span>
            </div>
        </div>
        <div className="category">

            {activos.map((a) => {
                return (<ProgramaItem key={a.id} type={props.type.toLowerCase()} item={a}></ProgramaItem>)
            })}
        </div>
        <div className="category">

            {inactivos.map((a) => {
                return (<ProgramaItem inactivo key={a.id} type={props.type.toLowerCase()} item={a}></ProgramaItem>)
            })}
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
            if(pathArr[3]=="suscribe" && !props.inactivo === undefined){
                setRegistering(true);
            }
        }else{
            setOpen(false) 
        }
    },[pathArr,setOpen,props.item.id])
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
            fetch('http://localhost:3080/api/register', requestOptions)
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