import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    useLocation
} from "react-router-dom";

export default function DRoute(props){
    const [inPage,setInPage] = useState(false);
    
    const location = useLocation();
   /*if( location.pathname === props.path){
       setInPage(true);
   }*/

   useEffect(()=>{
    if( location.pathname === props.path){
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