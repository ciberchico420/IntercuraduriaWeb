import React, { useEffect, useState } from 'react'
import './main.scss'
import { useSpring, animated, config } from 'react-spring'

function ButtonCircle(props) {
    var className = "circle " + props.className;
    const [over,setOver] = useState(false);

    const plus = 1.1;
    const onMouseOver = (e)=>{
        setScale({scale:plus})
    }
    const onMouseLeave = (e)=>{
        setScale({scale:1})
    }

    useEffect(()=>{
        setScale({scale:1});
    })

     const trans = ( s) => `perspective(600px) scale(${s})`
     var [spring,setScale] = useSpring(()=>({scale:plus,from:{scale:1},config:config.wobbly}));
     const style = {
        transform:spring.scale !== undefined?spring.scale.interpolate(trans):"none",
        height:props.size+"vw",
        width:props.size+"vw",
        cursor:'pointer'

     }

 
    return (<animated.div native className={className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} style={style}>
        {props.children}
    </animated.div>)
}

export default ButtonCircle;