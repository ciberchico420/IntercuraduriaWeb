import React, { useEffect, useState } from 'react'
import './main.scss'
import { useSpring, animated, config } from 'react-spring'

function ButtonCircle(props) {
    const [open, setOpen] = useState(false);
    const [fullyopen, setFullyOpen] = useState(false);
    var className = "circle " + props.className;

    const plus = 1.1;
    const onMouseOver = (e) => {
        if (!open) {
            setScale({ scale: plus })
        }

    }
    const onMouseLeave = (e) => {
        setScale({ scale: 1 })
    }
    const onClick = (e) => {
        if (!open) {
            setOpen(true);
            setFullyOpen(false);
        }

    }

    useEffect(() => {
        setScale({ scale: 1 });

    })

    const trans = (s) => `perspective(600px) scale(${s})`

    var [spring, setScale] = useSpring(() => ({ scale: plus, from: { scale: 1 }, config: config.wobbly }));
    const defaultStyle = {
        borderRadius: 100 + "%",
        width: props.size,
        height: props.size,
        left: props.left,
        top: props.top,
        border: 3,
        opacityLabel: 1,
        opacityContent: 0
    };
    const signoSize = open ? "%" : "vw"
    const openSpring = useSpring({
        to: async (next) => {
            if (open) {

                await next({ left: 0, top: 0, borderRadius: 0 + "px", height: 100, opacityLabel: 0,  })
                await setFullyOpen(true);
                await next({ width: 100, border: 0,opacityContent: 1 })
               
            } else {
                await next({ ...defaultStyle })
            }

        }, from: { ...defaultStyle }, config: { velocity: 1, ...config.wobbly }
    })



    const style = {
        transform: spring.scale !== undefined ? spring.scale.interpolate(trans) : "none",
        cursor: !open ? 'pointer' : 'auto',
        left: openSpring.left.interpolate((s) => `${s}%`),
        top: openSpring.top.interpolate((s) => `${s}%`),
        borderRadius: openSpring.borderRadius.interpolate((s) => `${s}`),
        width: openSpring.width.interpolate((s) => `${s}${signoSize}`),
        height: openSpring.height.interpolate((s) => `${s}${signoSize}`),
        borderWidth: openSpring.border,
        zIndex: open ? 99 : "auto"
    }


    return (<animated.div native className={className} onMouseOver={onMouseOver} onClick={onClick} onMouseLeave={onMouseLeave} style={style}>
        {!fullyopen?<animated.div style={{ opacity: openSpring.opacityLabel }}>{props.buttonText}</animated.div>:undefined}
        {fullyopen ? <animated.div style={{ opacity: openSpring.opacityContent }}>{props.children}</animated.div> : undefined}
    </animated.div>)
}

export default ButtonCircle;