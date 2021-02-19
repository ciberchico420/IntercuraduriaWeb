import React, { useEffect, useState } from 'react'
import '../main.scss'
import './content.scss'
import { useSpring, animated, config } from 'react-spring'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    useLocation
} from "react-router-dom";
import PageFromCategory from './pages/Textos';
import DRoute from './DRoute'
import Programas from './pages/Programas'
import { RiEyeCloseFill, RiCloseLine } from 'react-icons/ri'
import Archivo from './pages/Archivo';
import HomeManager, { SocialIcons } from '../home/HomeManager';

import {Menu,Logo} from '../home/HomeManager'
import { ProAc } from './pages/ProAc';
import {Tienda} from './pages/Tienda'


export default function ContentManager(props) {
    const location = useLocation()

    const [showContent, setShowContent] = useState(false);
    const [inPage, setInPage] = useState(false);
    useEffect(() => {
        if (location.pathname === "/") {
            closePage();
        }
    }, [location.pathname])

    const history = useHistory()

    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)

        })
    }, [history])

    const spring = useSpring({
        to: async (next) => {
            var text = inPage ? "0%" : "50%";
            await next({ minHeight: inPage ? "100%" : "0%" })
            await next({ transform: "translate(0px," + text + ")" })

            setShowContent(inPage);
        },

    })
    const goToHome = () => {
        history.push("/")
    }
    const openPage = () => {
        setInPage(true)
        // setShowContent(true);
    }
    const closePage = () => {
        setInPage(false)
        setShowContent(false);
    }
    return (<animated.div className={"content"} style={spring}>
      
        {inPage &&  <div className="black-on-top"><div className="closeContent" onClick={goToHome}><RiCloseLine /></div><Menu logo="left" top={true}></Menu></div>}
        
            <DRoute open={openPage} showContent={showContent} path={"/textos"} child={<PageFromCategory path="/textos" category="6" />}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/proyectos"} child={<PageFromCategory path="/proyectos" category="21" />}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/cursos"} child={<Programas category="2" type="Cursos"></Programas>}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/talleres"} child={<Programas category="3" type="Talleres"></Programas>}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/seminarios"} child={<Programas category="4" type="Seminarios"></Programas>}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/proac"} child={<ProAc/>}>
            </DRoute>

            {inPage &&  <div className="footer"><div className="footer-logo"><Logo></Logo><span className="name">Intercuraduria 2021</span></div><SocialIcons></SocialIcons></div>}
    

    </animated.div>)
}