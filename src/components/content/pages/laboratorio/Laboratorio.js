import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import './Laboratorio.scss'
import {GrLinkNext} from 'react-icons/gr'
import {VscDebugRestart} from 'react-icons/vsc'

export default function Laboratorio(props) {
    const [enPresentacion, setPresentacion] = useState(true);
    return (
        <div className="container-of-containers">
            <div className="laboratorio-container">
                {!enPresentacion ?
                    <Slider>
                        <SlideItem>
                            <Mantel>
                                <Huevo>
                                </Huevo>
                                <Cafe></Cafe>
                                <Papaya></Papaya>
                                <Cuchara></Cuchara>
                                <Tenedor></Tenedor>
                                <Servilleta></Servilleta>
                                <Olla></Olla>
                            </Mantel>
                            <Cuaderno></Cuaderno>
                            <Tetera></Tetera>
                            <Ipad></Ipad>
                            <Celular></Celular>
                            <Cuerpo></Cuerpo>
                        </SlideItem>
                        <SlideItem>
                            <div>Item 2</div>
                            <Mantel></Mantel>
                        </SlideItem>
                        <SlideItem>
                            <PaginaFinal></PaginaFinal>
                        </SlideItem>
                    </Slider>
                    :
                    <Presentacion set={setPresentacion}></Presentacion>
                }
            </div>
        </div>)
}
function Slider({ children }) {
    const [active, setActive] = useState(0);
    let newChildren = [];

    for (let a = 0; a < children.length; a++) {
        var clonedElementWithMoreProps = React.cloneElement(
            children[a],

            { active: a == active ? true : false, key: a,setActive:setActive }
        );
        newChildren.push(clonedElementWithMoreProps);
    }
    const goNext = () => {
        if (isValid(active + 1)) {
            setActive(active + 1);
        }else{
            setActive(0);
        }

    }


    const isValid = (newNum) => {
        return (newNum >= 0 && newNum < children.length)
    }

    return (
        <div className="slider">
            {newChildren}
            <GoNext goNext={goNext} active={active}  max={children.length-1}></GoNext>
        </div>
    )
}
function GoNext({ goNext,active,max }) {
    const text = active<max?
    <div className="nextBtnText"><GrLinkNext></GrLinkNext> Siguiente </div>
    :<div className="nextBtnText"><VscDebugRestart></VscDebugRestart> Reiniciar</div>;
    return (<div className="goNextBtn"><button onClick={goNext}>{text}</button></div>)
}
function SlideItem(props) {
    console.log(props)
    const spring = useSpring({ top: props.active ? "0%" : "120%", position: "absolute" })
    return (<animated.div style={spring} className="items-container">
        {props.children}
    </animated.div>)
}
function Presentacion(props) {
    const [hover, setHover] = useState(false)
    const [init, setInit] = useState(false)
    const spring = useSpring({ bottom: hover ? "0%" : "-100%" })

    let int = setTimeout(() => {
        if (!init) {
            setHover(true);
            setInit(true);
        }

    }, 3000);
    return (<div className="presentacion" onPointerEnter={() => { setHover(true) }} onPointerLeave={() => { setHover(false) }}>
        <animated.div className="info" style={spring}>
            <div className="nombre">Nombre de la exposición</div>
            <div>Información de la presentación</div>
            <button onClick={() => { props.set(false) }}>Iniciar</button>
        </animated.div>
        <p></p></div>)
}
function PaginaFinal(){
    return (<div className="paginaFinal">Página final</div>)
}
function Mantel(props) {
    return (<div className="mantel-container">
        {props.children}
    </div>)
}

function Huevo(props) {
    return (<div className="huevo">
        {props.children}
    </div>)
}

function Cafe(props) {
    return (<div className="cafe">
    </div>)
}

function Papaya(props) {
    return (<div className="papaya">
    </div>)
}
function Tenedor(props) {
    return (<div className="tenedor">
    </div>)
}

function Cuchara(props) {
    return (<div className="cuchara">
    </div>)
}

function Servilleta(props) {
    return (<div className="servilleta">
    </div>)
}

function Olla(props) {
    return (<div className="olla">
    </div>)
}
function Cuaderno(props) {
    return (<div className="cuaderno">
    </div>)
}
function Tetera(props) {
    return (<div className="tetera">
    </div>)
}
function Ipad(props) {
    return (<div className="ipad">
    </div>)
}
function Celular(props) {
    return (<div className="celular">
    </div>)
}

function Cuerpo(props) {
    return (<div className="cuerpo">
    </div>)
}


