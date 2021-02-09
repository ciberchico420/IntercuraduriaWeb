import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import ButtonCircle from '../ButtonCircle';
import '../main.scss'
import './home.scss'
import PageFromCategory from '../content/pages/Textos';
import { useSpring, animated, config } from 'react-spring'

import Colors from '../exports.module.scss'
import { RiArrowDropDownLine } from 'react-icons/ri';

function HomeManager(props) {

    return (<div className="homeContainer">
        <div className="sideMenu">
            <SideMenuItem path="/nosotras">Nosotras</SideMenuItem>
            <SideMenuItem path="/contacto">Contacto</SideMenuItem>


        </div>

        <Menu logo="center"></Menu>


    </div>)
}
export function Menu(props) {
    return (<div className="menu">
       {props.logo == "center" && <Logo></Logo>}
        <div className="menuContainer">
        {props.logo == "left" && <Logo></Logo>}
            <MenuItem submenu={[
                { name: "Cursos", link: "/cursos" },
                { name: "Talleres", link: "/talleres" },
                { name: "Seminarios", link: "/seminarios" },
                { name: "ProAc", link: "/seminarios" },
                { name: "Laboratorio", link: "/seminarios" },
            ]
            }>Programas
        </MenuItem>
            <MenuItem link="/textos">Textos</MenuItem>
            <MenuItem link="/proyectos">Proyectos</MenuItem>
            <MenuItem>Eventos</MenuItem>


        </div >

    </div>)
}
function Logo(){
    let history = useHistory();
    return( <div className="logo" onClick={()=>{history.push("/")}}><span>INTER</span><span>CURADURIA</span></div>)
}
function MenuItem(props) {
    const [toggle, setToggle] = useState(false);

    const fontSize = Colors.subMenuFontSize;

    let history = useHistory();

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


    return (
        <animated.div className={(props.submenu !== undefined) ? "menuItem has-submenu" : "menuItem"} onMouseOver={() => { setToggle(true) }} onMouseLeave={() => { setToggle(false); }} onClick={
            () => {

                if (props.link !== undefined) {
                    history.push("/")
                    history.push(props.link)
                }
            }
        }>
            <animated.button>
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