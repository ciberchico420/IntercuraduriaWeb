import React, { useEffect } from 'react';
import Circle from './Circle';
import './main.scss'

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


function CircleManager(props) {
    var active = true;
    var maxCircles = getRandom(6,12);
    var arr = {}
    
    if(active){
       for (var a = 0; a < maxCircles; a++) {
        var randX = getRandom(0,(window.innerWidth));
        var randY = getRandom(0,(window.innerHeight));
        arr[a] = { key: a, importance: getRandom(10,30), position: { x: randX, y: randY } ,isEmpty:getRandom(0,10)>=5?true:false};
    } 
    }

    useEffect(()=>{
        return(()=>{
            arr = {}
        })
    })
    
    return (
        <div className="circleManager">
            {Object.keys(arr).map(function(key) {
                return <Circle importance={arr[key].importance} position={arr[key].position} isEmpty={arr[key].isEmpty} key={key}></Circle>
            })}
        </div>
       
    );

}

export default CircleManager;