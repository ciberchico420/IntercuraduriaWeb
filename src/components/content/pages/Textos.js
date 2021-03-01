import React, { useEffect, useRef, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useHistory, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './PostStyle.scss'
import './Textos.scss'
import Colors from '../../exports.module.scss'
import { sitio } from '../../c'
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import { BsCalendarFill } from 'react-icons/bs'
import {useScript,useLink} from '../useScript';
import { useLightBox } from '../LightBox/LightBox';

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
        script.href = "https://intercuraduria.com/tienda/wp-includes/css/dist/block-library/style.min.css?ver=5.6";
        script.async = true;
        script.rel = "stylesheet"
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (<div className="contentContainer" ref={contentRef}>
        <div className="postsContainer" style={{ marginTop: inOpenPost ? "3%" : "60px" }}>
            {items.map(value => {
                var path = history.location.pathname.split("/")
                let th =value._embedded["wp:featuredmedia"];
       
                let defImg ="https://lh3.googleusercontent.com/proxy/5WERPyHoo0ZN0eGoCicwboGUuZ5xm1l9Yyicdx_IJJed68Wi6oDPM8eFe-0NBwhfltGw0gGM4PcV7lPLTJ61xmxYLkKkmBmNDKSGkn8hce-AXq6puvCxcJ-vv9KYTCuq";
                var image = th!=undefined?th[0]["source_url"]:defImg;

                if (value.id == path[2]) {
                    return (<OpenPost value={value} posts={items}  key={value.id} header={image}></OpenPost>)
                } else {
                    return (inOpenPost && <Post header={image} path={props.path} value={value} key={value.id} />)
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
        history.push(props.path+"/" + value.id)
    }
    let num = over ? 0 : 100;
    const spring = useSpring({ transform: "translate(0," + num + "%)" })
    var imgBg = props.header !== undefined ? props.header : ""
    return (
        <div className="postStyle button" onMouseOver={() => { setOver(true) }} onMouseLeave={() => { setOver(false) }} onClick={openFunc}>
            <img className="flayer-image" alt="Imagen" src={imgBg}></img>
            <animated.div className="flayer-info" style={spring}>
                <p>{ReactHtmlParser(props.value.title.rendered)}</p>
                <p className="author">Escrito por {props.value._embedded.author[0].name}</p>
            </animated.div>
        </div>)

}
function ShareButtons(props) {
    let iconSize = props.size;
    return (<div className="share">
        <FacebookShareButton url={window.location.href}><FacebookIcon size={iconSize} round={true} /></FacebookShareButton>
        <FacebookMessengerShareButton url={window.location.href}><FacebookMessengerIcon size={iconSize} round={true} /></FacebookMessengerShareButton>
        <WhatsappShareButton url={window.location.href}><WhatsappIcon size={iconSize} round={true} /></WhatsappShareButton>
        <TwitterShareButton url={window.location.href}><TwitterIcon size={iconSize} round={true} /></TwitterShareButton>

    </div>)
}

function OpenPost(props) {
    var date = new Date(props.value.date);
    var location = useLocation();
    let postRef = React.createRef();

    useLightBox(postRef)
    return (<main id="site-content" className="openPost" key={props.value.id}>
        <article>
            <div className="image-header"><div className="entry-title-bg" style={{ backgroundImage: "url(" + props.header+ ")" }}></div></div>
            <header className="entry-header"><h3 className="entry-title">{ReactHtmlParser(props.value.title.rendered)}</h3>
                <div className="info">
                    <div className="author-date">
                        <div className="author">Escrito por <span>{props.value._embedded.author[0].name}</span></div>
                        <div className="date"><BsCalendarFill style={{ marginRight: "3px" }}></BsCalendarFill>{date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}</div>
                    </div>

                    <ShareButtons size={30}></ShareButtons>

                </div>
            </header>

            <div className="entry-content post-inner thin" ref={postRef}>
                {ReactHtmlParser(props.value.content.rendered)}
            </div>
            <MorePosts posts={props.posts}></MorePosts>
        </article>

    </main>)
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function MorePosts(props) {

    let num1 = parseInt(getRandom(0, props.posts.length));
    let num2 = parseInt(getRandom(0, props.posts.length));
    let num3 = parseInt(getRandom(0, props.posts.length));
    return (<div className="more-posts"><div className="title-more-posts">Otras publicaciones</div>
        <div className="re-post-container"><RecomendedPost value={props.posts[num1]} /><RecomendedPost value={props.posts[num2]} /><RecomendedPost value={props.posts[num3]} /></div>
    </div>)
}

function RecomendedPost(props) {
    var history = useHistory();
    let goToPost = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        history.push(history.location.pathname.split("/")[0] + props.value.id)
    }
    return (<div className="recomended-post" onClick={goToPost} key={props.value.id}>{ReactHtmlParser(props.value.title.rendered)}</div>)
}