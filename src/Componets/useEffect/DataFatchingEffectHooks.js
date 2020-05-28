import React, {useState, useEffect} from 'react'
import Axios from 'axios'
 
function FatchingData(){
    const [Posts, setItems] = useState([])
    
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setItems(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    })
    return(
        <div>
            {
               Posts.map(item =>
               <li key = {item.id}> {item.title}</li>
               ) 
            }
        </div>
    )
 }

 export default FatchingData;