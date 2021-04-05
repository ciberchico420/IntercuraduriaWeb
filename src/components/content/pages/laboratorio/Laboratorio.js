import { useState } from 'react/cjs/react.development'
import './Laboratorio.scss'

export default function Laboratorio(props) {
    const [enPresentacion, setPresentacion] = useState(true);
    return (
        <div className="container-of-containers">


            <div className="laboratorio-container">
                {!enPresentacion ?
                    <Mantel>
                        <Huevo>
                        </Huevo>
                        <Cafe></Cafe>
                        <Papaya></Papaya>
                    </Mantel> :
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