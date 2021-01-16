import React, { useEffect, useRef, useState } from 'react'
import './content.scss'
import ReactHtmlParser from 'react-html-parser';
import { useSpring, animated } from 'react-spring';
import './CategoryStyle.scss'


export default function PageFromCategory(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://drokt.com/wordpress/wp-json/wp/v2/posts?categories=" + props.category+"&_embed")
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
            var images  = document.getElementsByTagName("img");
            console.log(images)
            
    }, [])

    const contentRef = useRef();

    useEffect(() => {
        const script = document.createElement('link');
        script.href = "http://drokt.com/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.6";
        script.async = true;
        script.rel = "stylesheet"
        document.body.appendChild(script);

        const script2 = document.createElement('link');
        script2.href = "http://drokt.com/wordpress/wp-content/themes/hello-elementor/style.min.css?ver=2.3.1";
        script2.async = true;
        script2.rel = "stylesheet"
       // document.body.appendChild(script2);
      return () => {
          document.body.removeChild(script);
          //document.body.removeChild(script2);
        }
      }, []);
      
    return (<div className="contentContainer" style={{height:props.showContent?"100%":0}} ref={contentRef}>{items.map(value => {
       var date = new Date(value.date);
       console.log(date.toDateString())
        return (<main id="site-content" key={value.id}><article>
            <header className="entry-header has-text-aling-center"><h2 className="entry-title">{ReactHtmlParser(value.title.rendered)}</h2> 
            <div className="info"><div className="author">Escrito por <span>{value._embedded.author[0].name}</span></div><div className="date">{date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()}</div></div>
            </header>
            <div className="post-inner thin">
                {ReactHtmlParser(value.content.rendered)}
            </div>
        </article></main>)
    })}</div>)
}