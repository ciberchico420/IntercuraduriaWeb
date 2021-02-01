import React,{useEffect,useState} from "react";
import {sitio} from '../../c'
import './Archivo.scss'


export default function Archivo(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(sitio + "/wp-json/wp/v2/posts?categories=" + props.category + "&_embed")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error", error)
                }
            )
    }, [props.category]);
    return (<div className="archivoContainer">{items.map(value=>{
        return(<ArchivoItem value={value} key={value.id}></ArchivoItem>)
    })}</div>)
}

export function ArchivoItem(props){
    const value = props.value;
    return(<div className="archivo-item"></div>)
}