import React, { useEffect,useState } from 'react'
import '../home.scss'

export default function Cursos() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost/c/intercuraduria/wordpress/wp-json/wp/v2/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    //setIsLoaded(true);
                    setItems(result);
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return (<div className="cursosContainer" style={{}}>{items.map(value=>{
        console.log(value)
        return(<div>{value.content.rendered}</div>)
    })}</div>)
}