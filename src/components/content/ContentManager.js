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
import HomeManager, { SocialIcons } from '../home/HomeManager';

import {Menu,Logo} from '../home/HomeManager'
import { ProAc } from './pages/ProAc';
import {Tienda} from './pages/Tienda'
import { useMediaQuery } from '@react-hook/media-query';
import {HiMenu} from 'react-icons/hi'
import Laboratorio from './pages/laboratorio/Laboratorio'



export default function ContentManager(props) {
    const location = useLocation()
    const isMobile = useMediaQuery("screen and (max-width: 1000px)")
    const [showContent, setShowContent] = useState(false);
    const [inPage, setInPage] = useState(false);
    useEffect(() => {
        if (location.pathname === "/") {
            closePage();
        }
    }, [location.pathname])
    

    const history = useHistory()
 

    useEffect(() => {
     if(isMobile == false){
         setOpenMenu("visible")
     }
    })
    const [openMenu,setOpenMenu] = useState("hidden");

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
        setOpenMenu("hidden");
    }
    const clickMenu = ()=>{
        if(openMenu == "hidden"){
             setOpenMenu("visible");
        }
        if(openMenu == "visible"){
            setOpenMenu("hidden");
       }
       
    }
    const MenuIcon = ()=>{
        return <div className="MenuIcon" onClick={clickMenu}><HiMenu size="2rem" color="white"></HiMenu></div>;
    }
    return (<animated.div className={"content"} style={spring}>
      
        {inPage &&  <div className="black-on-top" style={{maxHeight:openMenu=="visible"?"none":"60px"}}>
        {isMobile&&<MenuIcon></MenuIcon>}
        {openMenu != "hidden"&&<Menu logo={isMobile?"center":"left"} visible={openMenu} clickMenu={clickMenu} top={true}></Menu>}
        </div>}
        
            <DRoute open={openPage} showContent={showContent} path={"/textos"} child={<PageFromCategory path="/textos" category="2" />}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/proyectos"} child={<PageFromCategory path="/proyectos" category="3" />}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/cursos"} child={<Programas category="4" type="Cursos"></Programas>}>
            </DRoute>
            <DRoute open={openPage} showContent={showContent} path={"/talleres"} child={<Programas category="5" type="Talleres"></Programas>}>
            </DRoute>
            {/*<DRoute open={openPage} showContent={showContent} path={"/laboratorio"} child={<Laboratorio/>}>
            </DRoute>*/}
            <DRoute open={openPage} showContent={showContent} path={"/proac"} child={<ProAc/>}>
            </DRoute>

            {inPage &&  <div className="footer"><div className="footer-logo"><Logo></Logo><span className="name">Intercuraduria 2021<br></br>intercuraduria@gmail.com</span></div><SocialIcons></SocialIcons></div>}
    

    </animated.div>)
}