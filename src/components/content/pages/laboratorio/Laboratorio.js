import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import './Laboratorio.scss'
import { GrLinkNext } from 'react-icons/gr'
import { VscDebugRestart } from 'react-icons/vsc'
import { useMediaQuery } from '@react-hook/media-query';
import { SocialIcons } from '../../../home/HomeManager';
import { ShareButtons } from '../Textos';

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
                            <VideoPicandoAjo></VideoPicandoAjo>
                        </SlideItem>
                        <SlideItem>
                            <VideoRemedio></VideoRemedio>
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
    const goNext = () => {
        if (isValid(active + 1)) {
            setActive(active + 1);
        }
    }
    const isValid = (newNum) => {
        return (newNum >= 0 && newNum < children.length)
    }
    return (
        <div className="slider">
            {newChildren}
            {active > 1 && <HomeButton goHome={goHome} active={active} goNext={goNext} max={children.length - 1}></HomeButton>}
        </div>
    )
}
function HomeButton({ goHome, active, max, goNext }) {
    return (<div style={{ display: "flex", flexDirection: "column" }}>
        <div className="goNextBtn" onClick={goHome}></div>
        <div className="goNextBtnReal" onClick={goNext}></div>
    </div>)
}
function SlideItem(props) {
    const spring = useSpring({ top: props.active ? "0%" : "120%", position: "absolute" })
    return (<animated.div style={spring} className="items-container">
        {props.active && props.children}
    </animated.div>)
}
function Presentacion(props) {
    return (<div className="presentacionLaboratorio" >
        <button onClick={() => { props.set(false) }}></button>
    </div>)
}
function PaginaFinal() {
    return (
        <div className="paginaFinal">
            <div style={{ display: "flex", alignItems: "center", marginTop: "20px", border: "2px solid blue", flexDirection: "column", backgroundColor: "white", borderRadius: "20px", padding: "20px", boxShadow: "20px 20px 10px #00000021" }}>
                <p style={{ fontSize: "20px" }}>¡Muchas gracias por ver la exposición!</p>
                <p style={{ fontSize: "20px" }}>Comparte esta experiencia.</p>
                <ShareButtons size="40px"></ShareButtons>
            </div>

        </div>
    )
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
        set(7)
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
        set(6)
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
function PrimerDibujo({ set }) {
    return (<div className="primerDibujo">
        <button onClick={() => { set(1) }}></button>
    </div>)
}
function EnsambleImagenes() {
    return (<div className="ensambleImagenes"></div>)
}

function TextoCuratorial() {
    return (<div className="textoCuratorial">

        <div style={{ fontSize: ".8rem", color: "gray", marginBottom: "20px" }}>La siguiente muestra de dibujos contiene elementos animados que se activan al pasar el cursor encima, desplegando contenido adicional. Para una mejor experiencia sugerimos usar un navegador de escritorio. </div>
        <div className="tituloTextoCuratorial">
            Poner la mesa, darse el tiempo
        </div>
        <div >
            <div style={{ fontSize: ".9rem" }}>
                <p>Acompañamiento creativo entre Viviana Reyes y Adriana Flores.</p>
                <p>Diseño web Casiel Didriksson.</p>
            </div>


            <p> Para este acompañamiento decidimos invertir el sentido de los modos de producción creativa y permitirnos desacelerar. Alteramos intencionadamente el objetivo de producir una pieza definitiva. Por el contrario, dispusimos sobre la mesa retazos de ideas, bocadillos agridulces y largas meditaciones en torno a las afecciones y circunstancias que acomplejan nuestra práctica, artística y curatorial, respectivamente.
            </p>
            <p> Para intentar llegar al fondo de estas pulsiones, dispusimos dentro de cada uno de los elementos de la mesa, rituales cotidianos como momento idóneo para hablar con unx mismx. Fotografías para no olvidar la belleza de los placeres sencillos, notas y dibujos colaborativos para quitarse el miedo y encontrar un poco de luz en la mirada de la otra; para sentir el dolor y dejarlo entrar.
            </p>
            <div className="imagenesTextoCuratorialContainer">
                <ImagenCuratorial name="dos">
                    ¿Cómo curarnos de nuestros dolores?
                </ImagenCuratorial>

                <ImagenCuratorial name="cinco">
                    <ImagenCuratorial name="cuatro" marginTop="-2vw">

                        ¿Compartir reflexiones sobre el dolor con la otra y escuchar los suyos es socializar
                        o es acompañarnos en un mismo dolor?

                    </ImagenCuratorial>
                </ImagenCuratorial>

                <ImagenCuratorial name="tres">
                    ¿Cómo se relacionan con la voluntad de hacer arte?
                </ImagenCuratorial>
                <ImagenCuratorial name="uno">
                    Viviana viste la mesa con elementos de su cotidianeidad, me invita a entrar en intimidad, a quitarnos los zapatos y títulos empolvados, para entrar en un espacio seguro a distender el cuerpo y dejar que a vapor, broten los impulsos creativos. Hacemos un ejercicio de reconocimiento. A ambas nos interesa el dolor, el placer pero sobre todo la sanación entendida como un lugar suave y aterciopelado al que es posible llegar después de una serie de hábitos, rituales, menjurjes cotidianos y votos de confianza como proceso de curación.
                </ImagenCuratorial>

            </div>
        </div>
    </div>)
}
function ImagenCuratorial({ name, children,marginTop }) {

    return (<div className="imagenTextoCuratorial" style={{marginTop:marginTop}}>
        <div className={name}>
        </div>
        <span>
            {children}
        </span>

    </div>)
}
function VideoRemedio() {
    return (<VideoSlide url="https://www.youtube.com/embed/u3rd_WDZ1n0"></VideoSlide>)
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


