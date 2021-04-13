import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import './Laboratorio.scss'
import { GrLinkNext } from 'react-icons/gr'
import { VscDebugRestart } from 'react-icons/vsc'
import { useMediaQuery } from '@react-hook/media-query';

export default function Laboratorio(props) {
    const [enPresentacion, setPresentacion] = useState(true);
    const [active, setActive] = useState(0);
    return (
        <div className="container-of-containers">
            <div className="laboratorio-container">
                {!enPresentacion ?
                    <Slider setActive={setActive} active={active}>
                        <SlideItem>
                           <PrimerDibujo set={setActive}></PrimerDibujo>
                        </SlideItem>
                        <SlideItem>
                            <Mantel>
                                <Huevo set={setActive}>
                                </Huevo>
                                <Cafe></Cafe>
                                <Papaya set={setActive}></Papaya>
                                <Cuchara></Cuchara>
                                <Tenedor></Tenedor>
                                <Servilleta set={setActive}></Servilleta>
                                <Olla set={setActive}></Olla>
                            </Mantel>
                            <Cuaderno></Cuaderno>
                            <Salero set={setActive}></Salero>
                            <Ipad set={setActive}></Ipad>
                            <Celular></Celular>
                            <Cuerpo></Cuerpo>
                        </SlideItem>
                        <SlideItem>
                        <EnsambleImagenes></EnsambleImagenes>
                        </SlideItem>

                        <SlideItem>
                            <VideoVivianaPintando></VideoVivianaPintando>
                        </SlideItem>
                        <SlideItem>
                            <VideoAcomodandoFrutas></VideoAcomodandoFrutas>
                        </SlideItem>
                        <SlideItem>
                            <VideoRevolviendoTaza></VideoRevolviendoTaza>
                        </SlideItem>
                        <SlideItem>
                            <TextoCuratorial></TextoCuratorial>
                        </SlideItem>
                        <SlideItem>
                            <VideoPicandoAjo></VideoPicandoAjo>
                        </SlideItem>
                        <SlideItem>
                            <PaginaFinal></PaginaFinal>
                        </SlideItem>
                    </Slider>
                    :
                    <Presentacion set={setPresentacion}></Presentacion>
                }
               
            </div>
            <div className="textoCuratorialContainer"><TextoCuratorial></TextoCuratorial></div>
        </div>)
}
function Slider({ children, setActive, active }) {
    let newChildren = [];

    for (let a = 0; a < children.length; a++) {
        var clonedElementWithMoreProps = React.cloneElement(
            children[a],

            { active: a == active ? true : false, key: a, setActive: setActive }
        );
        newChildren.push(clonedElementWithMoreProps);
    }
    const goHome = () => {
        setActive(1)
    }
    const goNext = ()=>{
        if(isValid(active+1)){
           setActive(active+1); 
        }
    }
    const isValid  = (newNum)=>{
        return(newNum >= 0 && newNum < children.length)
    }
    return (
        <div className="slider">
            {newChildren}
            {active >1 && <HomeButton goHome={goHome} active={active} goNext={goNext} max={children.length - 1}></HomeButton>}
        </div>
    )
}
function HomeButton({ goHome, active, max,goNext }) {
    return (<div style={{display:"flex",flexDirection:"column"}}>
        <div className="goNextBtn" onClick={goHome}></div>
        <div className="goNextBtnReal" onClick={goNext}></div>
    </div>)
}
function SlideItem(props) {
    const spring = useSpring({ top: props.active ? "0%" : "120%", position: "absolute" })
    return (<animated.div style={spring} className="items-container">
        {props.active&&props.children}
    </animated.div>)
}
function Presentacion(props) {
    return (<div className="presentacionLaboratorio" >
        <button onClick={() => { props.set(false) }}></button>
    </div>)
}
function PaginaFinal() {
    return (<div className="paginaFinal">Página final</div>)
}
function Mantel(props) {
    return (<div className="mantel-container">
        {props.children}
    </div>)
}

function Huevo({ set }) {
    return (<div className="huevo" onClick={() => {
        set(3)
    }}>
        <MessageCan></MessageCan>
    </div>)
}

function Cafe(props) {
    return (<div className="cafe">
    </div>)
}

function Papaya({ set }) {
    return (<div className="papaya" onClick={() => {
        set(4)
    }}>
        <MessageCan></MessageCan>
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

function Servilleta({ set }) {
    return (<div className="servilleta" onClick={() => {
        set(6)
    }}>
        <MessageCan></MessageCan>
    </div>)
}

function Olla({ set }) {
    return (<div className="olla" onClick={() => {
        set(5)
    }}>
        <MessageCan></MessageCan>
    </div>)
}
function Cuaderno(props) {
    return (<div className="cuaderno">
    </div>)
}
function Salero({ set }) {
    return (<div className="salero" onClick={() => {
        set(7)
    }}>
        <MessageCan></MessageCan>
    </div>)
}
function Ipad({ set }) {
    return (<div className="ipad" onClick={() => { set(2) }}>
        <MessageCan></MessageCan>
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

function MessageCan() {
    return (<div className="messageInteractive"></div>)
}

function VideoSlide({ url }) {
    return (<div className="videoSlide">
        <iframe width="60%" height="50%" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)
}
function PrimerDibujo({set}){
    return(<div className="primerDibujo">
        <button onClick={()=>{set(1)}}></button>
    </div>)
}
function EnsambleImagenes(){
    return(<div className="ensambleImagenes"></div>)
}

function TextoCuratorial() {
    return (<div className="textoCuratorial">
        <div className="tituloTextoCuratorial">
            Texto curatorial
        </div>
        <div>
            <p>
                Duis convallis dignissim est. Sed quis dolor fringilla, efficitur ante at, convallis libero. Integer sollicitudin, massa ac porttitor lobortis, nunc ligula ullamcorper purus, eget molestie urna magna eu massa. Fusce consectetur sem sed interdum porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur mauris a nibh tincidunt pellentesque. Duis elementum vel justo interdum blandit. Aenean luctus eleifend imperdiet. Nullam non dolor risus. Quisque ullamcorper maximus est at molestie. Maecenas hendrerit pretium lorem, at sodales ante tempor a. Nunc vehicula lectus sit amet eleifend suscipit. Etiam consequat diam eget purus aliquet, id convallis justo tristique.
            </p>
            <p>
                Pellentesque ultrices augue orci, at faucibus elit semper et. Ut volutpat blandit turpis, at euismod diam interdum ut. Phasellus congue leo et ullamcorper vestibulum. Sed lacinia lectus at odio semper, non fringilla enim tristique. Aliquam congue ante sed turpis suscipit mollis non et massa. Phasellus pretium orci eget dui imperdiet, a condimentum orci pharetra. Praesent eu nunc ultricies, ullamcorper magna imperdiet, consectetur odio. Pellentesque pellentesque commodo erat quis posuere. Fusce laoreet ullamcorper vehicula. Nunc quis velit at purus feugiat malesuada.
            </p>
        </div>
    </div>)
}

function VideoVivianaPintando() {
    return (<VideoSlide url="https://www.youtube.com/embed/ESENW7QOGOQ"></VideoSlide>)
}
function VideoAcomodandoFrutas() {
    return (<VideoSlide url="https://www.youtube.com/embed/g2KgaatmbOs"></VideoSlide>)
}
function VideoRevolviendoTaza() {
    return (<VideoSlide url="https://www.youtube.com/embed/Ttp1EXFqzDw"></VideoSlide>)
}
function VideoPicandoAjo() {
    return (<VideoSlide url="https://www.youtube.com/embed/Rtg5jJNo2ZI"></VideoSlide>)
}


