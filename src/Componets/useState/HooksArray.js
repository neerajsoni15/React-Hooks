import React,{useState} from 'react'

function HooksArray () {
    const [iteams, setIteams] = useState([]);

    function AddItem() {
        setIteams( [...iteams,{
            value: Math.floor((Math.random() * 10) + 1),
            id: Date.now()
        }])
    }
    return(
        <div>
            <button onClick = {AddItem}>Add Iteams</button>
            <ul>
                {
                    iteams.map(data => (
                        <li key = {data.id}>{data.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HooksArray;