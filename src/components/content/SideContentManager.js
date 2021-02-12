import React, { useState, useEffect } from 'react'
import './content.scss'
import { useSpring, animated, config } from 'react-spring'
import DRoute from './DRoute';
import { useHistory, useLocation } from 'react-router-dom'
import Nosotras from './pages/Nosotras';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Contacto } from './pages/Contacto';

export default function SideContentManager() {
    const [open, setOpen] = useState(false);
    const spring = useSpring({ width: open ? "100%" : "0%", config: config.wobbly })
    const location = useLocation()
    const history = useHistory();


    useEffect(() => {
        if (location.pathname === "/") {
            closePage();
        }
    }, [location.pathname])


    const openBar = () => {
        setOpen(true);
    }
    const closePage = () => {
        setOpen(false);
        history.push("/");
        console.log("close")
    }
    return (<animated.div id="sideContentManager" style={spring}>
        <div className="side-close-content" onClick={closePage}><FaArrowAltCircleRight></FaArrowAltCircleRight></div>
        <div className="side-content">
            <DRoute path="/nosotras" showContent={true} open={openBar} child={<Nosotras></Nosotras>}></DRoute>
            <DRoute path="/contacto" showContent={true} open={openBar} child={<Contacto></Contacto>}></DRoute>
        </div>

    </animated.div>)
}