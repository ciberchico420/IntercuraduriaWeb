import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import ButtonCircle from '../ButtonCircle';
import '../main.scss'
import './home.scss'
import PageFromCategory from '../content/PageFromCategory';
import { useMediaQuery } from 'react-responsive'
import { useSpring, animated, config } from 'react-spring'

import Colors from '../exports.module.scss'
import { IoIosArrowDropdownCircle,IoIosMail} from 'react-icons/io';
import { GiSwordwoman} from 'react-icons/gi';

function HomeManager(props) {

    const isPortrait = useMediaQuery({ query: '(min-width: 600px)' })


    return (<div className="homeContainer">
        <div className="sideMenu">
            <SideMenuItem>Nosotras <GiSwordwoman/></SideMenuItem>
            <SideMenuItem>Contacto <IoIosMail/></SideMenuItem>


        </div>

        <div className="menu">
            <div className="logo"><span>INTER</span><span>CURADURIA</span></div>
            <div className="menuContainer">
                <MenuItem submenu={[
                    { name: "Cursos" },
                    { name: "Talleres" },
                    { name: "Seminarios" },
                    { name: "Seminarios2" },
                    { name: "Seminarios3" },
                ]
                }>Programas
                </MenuItem>
                <MenuItem link="/textos">Textos</MenuItem>
                <MenuItem>Proyectos</MenuItem>
                <MenuItem>Eventos</MenuItem>


            </div >

        </div>


    </div>)
}
function MenuItem(props) {
    const [toggle, setToggle] = useState(false);
    const [click, setClick] = useState(false);
    const fontSize = Colors.subMenuFontSize;

    let history = useHistory();

    const spring = useSpring({
        to: async (next) => {
            var subLeng = props.submenu !== undefined ? props.submenu.length : 0;
            await next({
                opacity: toggle ? 1 : 0,
                width: toggle ? "100%" : "0%",
                fontSize: click ? (Colors.subMenuFontSizeClick) + "vh" : fontSize + "vh",
                fontColor: toggle ? Colors.mainColor : Colors.secondaryColor,
                submenuHeight: "0%"
            })

            await next({ submenuHeight: (toggle || click) ? "100%" : "0%" })


        }
    })
    return (
        <animated.div className="menuItem" onMouseOver={() => { setToggle(true) }} onMouseLeave={() => { setToggle(false); setClick(false) }} onClick={
            () => { 
                setClick(true);  
                if(props.link !== undefined){
                    history.push(props.link)
                    
                }
            }
            }>
            <animated.button className="menuItemButton"
                style={{ fontSize: spring.fontSize, color: spring.fontColor }}>
                {props.children}

            </animated.button>
            {props.submenu !== undefined&&<IoIosArrowDropdownCircle  color={Colors.mainColor} style={{marginLeft:5}}/>}
            <animated.div className="menuItemLine" style={spring}></animated.div>

            {props.submenu!== undefined&&<animated.div className="subMenu" style={{height: spring.submenuHeight }}>
                <animated.ul style={{height: spring.submenuHeight}}>
                    {props.submenu !== undefined && props.submenu.map((val) => {

                        return <li key={val.name}>
                            {val.name}
                        </li>
                    })}
                </animated.ul>

            </animated.div>}

        </animated.div>

    )
}

function SideMenuItem(props) {
    return (<div className="sideMenuItem">
        {props.children}
    </div>)
}

export default HomeManager;