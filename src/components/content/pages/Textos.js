import React, { useEffect, useRef, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useHistory, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './PostStyle.scss'
import './Textos.scss'
import Colors from '../../exports.module.scss'
import { sitio } from '../../c'
import {FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from 'react-share'


export default function PageFromCategory(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [inOpenPost, setInOpenPost] = useState(false);
    var history = useHistory();
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

    useEffect(() => {
        var args = history.location.pathname.split("/")
        if (args[2] != undefined) {
            setInOpenPost(false);
        } else {
            setInOpenPost(true);
        }
    }, [history.location.pathname])

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
        {inOpenPost&&<div className="titulo-header"><span>Textos</span></div>}
        <div className="postsContainer">
            {items.map(value => {
                var path = history.location.pathname.split("/")
                var html = ReactHtmlParser(value.content.rendered);
                var image;
                html.forEach(element => {

                    if (element.props.className !== undefined) {

                        if (element.props.className.includes("wp-block-image")) {
                            image = element.props.children[0];
                        }
                    }
                });
                if (value.id == path[2]) {
                    return (<OpenPost value={value} header={image}></OpenPost>)
                } else {
                    return (inOpenPost && <Post header={image} value={value} key={value.id} />)
                }

            })}
        </div>
    </div>)
}

function Post(props) {
    const [over, setOver] = useState(false);
    var value = props.value;
    var history = useHistory();
    const openFunc = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        history.push("/textos/" + value.id)
    }
    let num = over ? 0 : 100;
    const spring = useSpring({ transform: "translate(0," + num + "%)" })
    var imgBg = props.header !== undefined ? props.header.props.src : ""
    return (
        <div className="postStyle button" onMouseOver={() => { setOver(true) }} onMouseLeave={() => { setOver(false) }} onClick={openFunc}>
            <img className="flayer-image" alt="Imagen" src={imgBg}></img>
            <animated.div className="flayer-info" style={spring}>
                <p>{ReactHtmlParser(props.value.title.rendered)}</p>
                <p className="author">Escrito por {props.value._embedded.author[0].name}</p>
            </animated.div>
        </div>)

}
function ShareButtons(props){
    let iconSize = props.size;
    return(<div className="share">
    <FacebookShareButton url={window.location.href}><FacebookIcon size={iconSize} round={true}/></FacebookShareButton>
    <FacebookMessengerShareButton url={window.location.href}><FacebookMessengerIcon size={iconSize} round={true}/></FacebookMessengerShareButton>
    <WhatsappShareButton url={window.location.href}><WhatsappIcon size={iconSize} round={true}/></WhatsappShareButton>
    <TwitterShareButton url={window.location.href}><TwitterIcon size={iconSize} round={true}/></TwitterShareButton>
    
    </div>)
}

function OpenPost(props) {
    var date = new Date(props.value.date);
    var location = useLocation();
    return (<main id="site-content" className="openPost" key={props.value.id}>
        <article>
            <header className="entry-header"><h2 className="entry-title">{ReactHtmlParser(props.value.title.rendered)}</h2>
                <div className="entry-title-bg" style={{ backgroundImage: "url(" + props.header.props.src + ")" }}></div>
                <div className="info">
                    <div className="author">Escrito por <span>{props.value._embedded.author[0].name}</span></div>
                    <div className="date">{date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}</div>
                   <ShareButtons size={30}></ShareButtons>
                    
                </div>

            </header>
            <div className="post-inner thin">
                {ReactHtmlParser(props.value.content.rendered).splice(-1, 1)}
            </div>
        </article></main>)
}