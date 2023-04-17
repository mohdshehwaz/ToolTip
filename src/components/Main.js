import React, { useState } from 'react'
import "./Main.css";

const Main = (props) => {

    
    const [hover,setHover] = useState(false);
    const onMouseHover = () => {
        setHover(true);
        
    }
    const onLeave = () => {
        setHover(false);
        
    }
    return (
        <div className='main-div'>
            <button onMouseLeave={onLeave} onMouseOver={onMouseHover}>Hover Over Me!!!</button>
            <div className={hover ? props.text : 'hide'}>
                Thanks for hovering,I am Tooltip
            </div>
        </div>
    )
}

export default Main