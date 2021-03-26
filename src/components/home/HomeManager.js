import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ButtonCircle from '../ButtonCircle';
import '../main.scss'
import './home.scss'
import PageFromCategory from '../content/pages/Textos';
import { useSpring, animated, config } from 'react-spring'

import Colors from '../exports.module.scss'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {RiContactsBook2Line} from 'react-icons/ri'

function HomeManager(props) {

    return (<div className="homeContainer">
        <div className="sideMenu">
            <SideMenuItem path="/nosotras">Nosotras</SideMenuItem>
            <SideMenuItem path="/contacto">Contacto</SideMenuItem>


        </div>

        <Menu top={false} logo="center"></Menu>
        <SocialIcons followus></SocialIcons>


    </div>)
}
export function Menu(props) {
    let vis = props.visible != undefined?props.visible:true;
    return (<div className="menu">
        {props.logo == "center" && <Logo></Logo>}
        <div className="menuContainer" style={{visibility:vis}}>
            {props.logo == "left" && <Logo></Logo>}
            <MenuItem top={props.top} submenu={[
                { name: "Cursos", link: "/cursos" },
                { name: "Talleres", link: "/talleres" },
                { name: "PROAC", link: "/proac" },
            ]
            }>Programas
        </MenuItem>
            <MenuItem top={props.top} link="/textos">Textos</MenuItem>
            <MenuItem top={props.top} link="/proyectos">Proyectos</MenuItem>
            <MenuItem top={props.top}>Laboratorio</MenuItem>
            <MenuItem top={props.top}><a href="/tienda" target="_blank">Tienda</a></MenuItem>


        </div >

    </div>)
}
export function Logo() {
    let history = useHistory();
    return (<div className="logo" onClick={() => { history.push("/") }}><span>INTER</span><span>CURADURIA</span></div>)
}

export function SocialIcons(props) {
    return (<div className="social-icons">
        <div className="icons">
            <a href="https://www.facebook.com/Intercuraduria-101411698614498" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/intercuraduria" target="_blank"><FaInstagram /></a>
            <a href="https://www.twitter.com/intercuraduria" target="_blank"><FaTwitter /></a>
            </div>
    </div>)
}
function MenuItem(props) {
    const [toggle, setToggle] = useState(false);
    const [inPage, setInPage] = useState(false);


    const fontSize = Colors.subMenuFontSize;

    let history = useHistory();
    let location = useLocation();

    const spring = useSpring({
        to: async (next) => {
            var subLeng = props.submenu !== undefined ? props.submenu.length : 0;
            await next({
                opacity: toggle ? 1 : 0,
                width: toggle ? "100%" : "0%",

                fontColor: toggle ? Colors.mainColor : Colors.secondaryColor,
                submenuHeight: "scale(1,0)",
            })

            await next({ submenuHeight: (toggle) ? "scale(1,1)" : "scale(1,0)" })


        }
    })
    useEffect(() => {
        if (props.link != undefined) {
            let path = location.pathname.split("/")[1];
            if (path == props.link.replace("/", "")) {
                console.log("In page ", path)
                setInPage(true);
            }else{
                setInPage(false);
            }


        }
    });

    let style = !props.top?undefined:{ backgroundColor: inPage ? Colors.mainColor : "transparent",maxHeight:inPage?"40px":"",marginTop:"-3px"};

    return (
        <animated.div className={(props.submenu !== undefined) ? "menuItem has-submenu" : "menuItem"} style={style} onMouseOver={() => { setToggle(true) }} onMouseLeave={() => { setToggle(false); }} onClick={
            () => {

                if (props.link !== undefined) {
                    history.push("/")
                    history.push(props.link)
                }
                if (props.link !== undefined) {
                    history.push("/")
                    history.push(props.link)
                }
            }
        }>
            <animated.button style={{color:inPage?"white":"" }}>
                {props.children}

            </animated.button>
            {props.submenu !== undefined && <RiArrowDropDownLine size="25px" style={{ marginLeft: 5 }} />}
            <animated.div className="menuItemLine" style={spring}></animated.div>

            {props.submenu !== undefined && <animated.div className="subMenu" style={{ transform: spring.submenuHeight }}>
                <animated.ul>
                    {props.submenu !== undefined && props.submenu.map((val) => {

                        return <li key={val.name} onClick={() => {
                            if (val.link !== undefined) {
                                history.push(val.link)
                            }
                        }}>
                            {val.name}
                        </li>
                    })}
                </animated.ul>

            </animated.div>}

        </animated.div>

    )
}

function SideMenuItem(props) {
    const history = useHistory();
    return (<div className="sideMenuItem" onClick={() => {
        history.push(props.path)
    }}>
        {props.children}
    </div>)
}

export default HomeManager;