import React , {useState} from 'react';

function UseStateAsObject () {
    const [name, setName] = useState({firstName: '' , LastName: ''})
    function firstNameUpdate(e){
        setName({
            ...name,
            firstName : e.target.value
        })
    }
    function LastNameUpdate(e){
        setName({
            ...name,
            LastName : e.target.value
        })
    }
    return(
        <div>
            <input type= "text" value = { name.firstName} onChange = {firstNameUpdate}/>
            <input type= "text" value = { name.LastName} onChange = {LastNameUpdate}/>
            <h1> My first Name is {name.firstName}</h1>
            <h1> My first Name is {name.LastName}</h1>
        </div>
    )
}

export default UseStateAsObject;
