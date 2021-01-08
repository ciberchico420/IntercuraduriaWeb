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
import PageFromCategory from './PageFromCategory';
import {RiEyeCloseFill,RiCloseLine} from 'react-icons/ri'


export default function ContentManager(props) {
    const location = useLocation()
    console.log(location)
    const [showContent, setShowContent] = useState(false);
    const [inPage, setInPage] = useState(false);
    const pages = [
        { path: "/textos", child: <PageFromCategory category="2" showContent={showContent} /> }
    ]
    



    useEffect(() => {
        pages.forEach(val => {
            if (location.pathname === val.path) {
                setInPage(true);
                console.log("si", inPage)
            }else{
                setInPage(false)
                setShowContent(false)
            }
        })
    })

    const history = useHistory()

    useEffect(() => {
       return history.listen((location) => { 
          console.log(`You changed the page to: ${location.pathname}`) 
         
       }) 
    },[history]) 

    const spring = useSpring({
        to: async (next) => {
            var text = inPage ? "0%" : "50%";
            await next({minHeight:inPage?"100%":"0%" })
            await next({ transform: "translate(0px," + text + ")"})
            
            setShowContent(inPage);
        },
        
    })
    return (<animated.div className="content" style={spring}>
        <div className="closeContent" onClick={()=>{history.push("/")}}><RiEyeCloseFill/><RiCloseLine/></div>
        {pages.map(val => {
            return (
                <Route path={val.path} key={val.path}>
                    {val.child}
                </Route>
            );

        })}


    </animated.div>)
}