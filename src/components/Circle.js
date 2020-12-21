import React, { useEffect, useState } from 'react';
import './main.scss'
import { useSpring, animated } from 'react-spring';

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


function Circle(props) {
    var radius = (props.importance * window.innerWidth / 100)
    var randTime = getRandom(6000, 10000);
    const spring2 = useSpring({
        to: async (next) => {
            while (true) {
                //(
                var randX = getRandom(-120, window.innerWidth);
                var randY = getRandom(-100, window.innerHeight);


                await next({ left: randX, top: randY })
              
            }

        }, from: { top: getRandom(-120, window.innerHeight), left: getRandom(-100, window.innerWidth) },
        config: { duration:randTime,mass: 1, tension: 180, friction: 12 }
    })

    useEffect(()=>{
        return(()=>{
            console.log("Circle unmounted")
        })
    })



    var className = "circle";
    if (props.isEmpty) {
        className += " empty"
    }


    return (
        <animated.div className={className} style={{ width: radius, height: radius, ...spring2 }}>
        </animated.div>
    )
}

export default Circle;