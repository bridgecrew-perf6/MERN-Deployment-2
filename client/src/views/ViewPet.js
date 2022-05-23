import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewPet() {
    const [pet, setPet] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const[count, setCount] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pet/" +id)
            .then(res=>setPet(res.data)) 
            .catch(err => console.log(err))

    },[]);

    const deletePet = (id) =>{
      axios.delete("http://localhost:8000/api/delete/" + id)
        .then( res =>{
          navigate("/");
        })
        .catch(err => console.log(err))
    }

    const countHandler = ()=>{
        if(count < 1){

            setCount(count + 1)
        }
        else{
            count = 1;
        }
    }
  return (
    <div>
        <Link to="/">Back to Home</Link>
        
        <h2>Details about: {pet.name} </h2>
        <h3>Pet type: {pet.type}</h3>
        <h3>Pet Description: {pet.description}</h3>
        <h3>Pet Skills:</h3>
        <ul>
            <li>{pet.skillOne}</li>
            <li>{pet.skillTwo}</li>
            <li>{pet.skillThree}</li>
        </ul>
        <h3>Like(s):{count}</h3>
        <button onClick={countHandler}>Like {pet.name}</button>
        <button onClick={(e)=>{deletePet(pet._id)}}>Adopt</button>

    </div>
  )
}

export default ViewPet