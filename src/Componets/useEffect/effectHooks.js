import React, {useState, useEffect} from 'react';

function UseeffectHooks (){
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `Button is clicked ${count} times`;
    })
    function handleClickevent(){
        setCount(count + 1);
    }
    return(
        <div>
            <button onClick ={handleClickevent}>Button Is clicked {count} times</button>
        </div>
    )
}


export default UseeffectHooks;