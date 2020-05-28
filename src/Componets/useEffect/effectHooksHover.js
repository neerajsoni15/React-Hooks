import React, {useState, useEffect} from 'react';


function HookHover(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = e =>{
        console.log("Mouse Hover effect");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("Use Effect Called");
        window.addEventListener('mousemove' , logMousePosition)
    }, [])
    return(
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookHover;