import React, { useState,useEffect } from 'react'
import './content.scss'
import {useSpring,animated, config} from 'react-spring'
import DRoute from './DRoute';
import {useLocation} from 'react-router-dom'

export default function SideContentManager(){
    const [open,setOpen] =useState(false);
    const spring = useSpring({width:open?"800px":"0px",config:config.wobbly})
    const location = useLocation()


    useEffect(() => {
        if (location.pathname === "/") {
            closePage();
        }
    }, [location.pathname])


    const openBar = ()=>{
        setOpen(true);
    }
    const closePage = ()=>{
        setOpen(false);
    }
    return (<animated.div id="sideContentManager" style={spring}>
        <DRoute path="/nosotras" showContent={true} open={openBar} child={<div>Nosotras</div>}></DRoute>
    </animated.div>)
}