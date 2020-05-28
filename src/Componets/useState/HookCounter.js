import React, {useState} from 'react'

function Hookcounter () {
    
    const [counter, Increment] = useState(0);
    //const [counter1, Increment1] = useState(6);
    
     return(
        <div>
            <button onClick ={() => Increment(counter+1)}> Count {counter}</button>
        </div>
    )
}
export default Hookcounter;