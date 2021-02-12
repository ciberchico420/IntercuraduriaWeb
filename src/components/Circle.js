import React, { useEffect, useState } from 'react';
import './main.scss'
import { useSpring, animated } from 'react-spring';
import Colors from './exports.module.scss'

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomColor() {
    let colors = [Colors.blue1, Colors.blue2, Colors.blue3, Colors.purple1, Colors.purple2, Colors.purple3];
    let color = getRandom(0, colors.length);
    return colors[parseInt(color)];

}

function Circle(props) {
    var radius = (props.importance * window.innerWidth / 100)
    var randTime = getRandom(6000, 10000);
    const spring2 = useSpring({
        to: async (next) => {
            while (true) {
                //(
                let randX = getRandom(-120, window.innerWidth);
                let randY = getRandom(-100, window.innerHeight);


                await next({ left: randX, top: randY })

            }

        }, from: { top: getRandom(-120, window.innerHeight), left: getRandom(-100, window.innerWidth), border: "3px solid " + getRandomColor() },
        config: { duration: randTime, mass: 1, tension: 180, friction: 12 }
    })


    var className = "circle";


    return (
        <animated.div className={className} style={{ width: radius, height: radius, ...spring2 }}>
        </animated.div>
    )
}

export default Circle;