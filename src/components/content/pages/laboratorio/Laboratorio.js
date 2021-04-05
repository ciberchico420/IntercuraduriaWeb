import { useState } from 'react/cjs/react.development'
import './Laboratorio.scss'

export default function Laboratorio(props) {
    const [enPresentacion, setPresentacion] = useState(true);
    return (
        <div className="container-of-containers">
            <div className="laboratorio-container">
                {!enPresentacion ?
                    <div className="items-container">
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
                    </div>
                    :
                    <Presentacion set={setPresentacion}></Presentacion>
                }
            </div>
        </div>)
}
function Presentacion(props) {
    return (<div className="presentacion">Bienvenidx
        <p><button onClick={() => { props.set(false) }}>Entrar</button></p></div>)
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