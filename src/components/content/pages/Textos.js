import React, { useEffect, useRef, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './PostStyle.scss'
import './Textos.scss'
import Colors from '../../exports.module.scss'
import {sitio} from '../../c'


export default function PageFromCategory(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    //const sitio = c.sitio;
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

    const contentRef = useRef();

    useEffect(() => {
        const script = document.createElement('link');
        script.href = "http://drokt.com/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.6";
        script.async = true;
        script.rel = "stylesheet"
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (<div className="contentContainer" ref={contentRef}>
        <div className="titulo-header"><span>Nuestros textos</span></div>
        <div className="postsContainer">
            {items.map(value => {
                return (<Post value={value} key={value.id} />)
            })}</div>
    </div>)
}

function Post(props) {
    var value = props.value;
    var history = useHistory();
    const [open, setOpen] = useState(false);
    const [over, setOver] = useState(false);
    var date = new Date(value.date);
    var html = ReactHtmlParser(value.content.rendered);
    console.log(html)
    var image;
    html.forEach(element => {

        if (element.props.className !== undefined) {

            if (element.props.className.includes("wp-block-image")) {
                console.log("xd", element.props.children)
                image = element.props.children[0];
            }
            //image = element.children[0];
        }
    });
    const openFunc = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        history.push("/textos/" + value.id)
    }

    useEffect(() => {
        var args = history.location.pathname.split("/")
        if (args[2] == value.id) {
            setOpen(true)
        }
        if (args[2] == undefined) {
            if (open) {
                setOpen(false)
                history.push("/textos")
            }
        }
        console.log(args);
    }, [history.location.pathname, open, value.id, history])
    var size = over?"410px":"400px";
    var imgBg = image !== undefined ? image.props.src : ""
    return (<div className="postStyle button" onPointerEnter={()=>{setOver(true)}} onPointerLeave={()=>{setOver(false)}} onClick={!open && openFunc} style={
        {
            position: open ? "absolute" : "relative",
            top: "0",
            zIndex: open ? 10000 : "auto",
            width: open ? "100%" : size,
            height: open ? "auto" : size,
            minHeight: open ? "100%" : "auto",
            borderRadius: open ? "0%" : "100%",
            background:open?"white":"url("+imgBg+")",
            transition:open?"none":"width 1s, height 1s, border 1s",
            border:open?"none":!over?"0px solid black":"3px solid black"
            

        }}>{!open ? <img className="flayer-image" alt="Imagen" src=""></img> :
            <main id="site-content" className="postStyle" key={value.id}>
                <article>
                    <header className="entry-header has-text-aling-center"><h2 className="entry-title">{ReactHtmlParser(value.title.rendered)}</h2>
                        <div className="info"><div className="author">Escrito por <span>{value._embedded.author[0].name}</span></div><div className="date">{date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}</div></div>
                    </header>
                    <div className="post-inner thin">
                        {ReactHtmlParser(value.content.rendered).splice(-1,1)}
                    </div>
                </article></main>}
    </div>)
    /*return (<main id="site-content" className="postStyle" key={value.id}>
         <article>
             <header className="entry-header has-text-aling-center"><h2 className="entry-title">{ReactHtmlParser(value.title.rendered)}</h2>
                 <div className="info"><div className="author">Escrito por <span>{value._embedded.author[0].name}</span></div><div className="date">{date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}</div></div>
             </header>
             <div className="post-inner thin">
                 {ReactHtmlParser(value.content.rendered)}
             </div>
         </article></main>)*/
}