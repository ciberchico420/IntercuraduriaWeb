import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    useLocation
} from "react-router-dom";

export default function DRoute(props) {
    const [inPage,setInPage] = useState(false);
    
    const location = useLocation();
   const pathArr = location.pathname.split("/");

   useEffect(()=>{
    if( location.pathname.includes(props.path)){
        setInPage(true);
        props.open()
    }else{
        setInPage(false)
    }
   },[location.pathname,props.path,props])
    return ((inPage&&props.showContent)?
       props.child:null
    );
}