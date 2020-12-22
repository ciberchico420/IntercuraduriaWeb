import React, { useEffect, useState } from 'react'
import '../home.scss'
import ReactHtmlParser from 'react-html-parser';

export default function PageFromCategory(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost/c/intercuraduria/wordpress/wp-json/wp/v2/posts?categories="+props.category)
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
                    console.log("error", error)
                }
            )
    }, [])
    return (<div className="cursosContainer" style={{}}>{items.map(value => {
        console.log(value)
        return (<main id="site-content" key={value.id}><article>
            <header className="entry-header has-text-aling-center"><h2 className="entry-title">{ReactHtmlParser(value.title.rendered)}</h2></header>
            <div className="post-inner thin">
            {ReactHtmlParser(value.content.rendered)}
            </div>
            </article></main>)
    })}</div>)
}