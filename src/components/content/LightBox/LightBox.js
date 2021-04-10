import React from 'react';
import ReactDOM from 'react-dom'
import { useEffect } from 'react';
import './Lightbox.scss'
import { useState } from 'react';

export function useLightBox(html) {
    let ind = 0;
    let imgs = useState([])
    let container;
    useEffect(() => {
        imgs = html.current.getElementsByTagName("img");
        for (let index = 0; index < imgs.length; index++) {
            let element = imgs[index];
            element.style = "cursor:pointer;"
            element.addEventListener("click", (e) => {
                onClick(e, index)
                ind = index;
            });

        }
        return () => {
           close();
        }
    }, [])

    let onClick = (e, index) => {
        createLightbox(imgs, index);
    }

    

    function createLightbox(images, index) {
        if (container == undefined) {
            container = document.createElement("div");
           container.addEventListener("click",close)
            document.body.append(container);
        }
        let imgsToAdd = []
        for (let i = 0; i < images.length; i++) {
            imgsToAdd.push(<img src={images[i].src}></img>)
        }

        ReactDOM.render(<div className="lightbox">
            <div className="s-image">{imgsToAdd[index]}</div>
        </div>, container)
        //document.body.append()
    }
    function close(){
      if(container != undefined){
        document.body.removeChild(container) 
         container = undefined; 
      }
    }
}
