import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form';

function EditPet() {
    const { id } = useParams();
    const [pet, setPets] = useState([]);
    const[loaded, setLoaded] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            })
    },[])
    const updatePet = (pet) =>{
        axios.patch('http://localhost:8000/api/update/' + id, pet)
            .then(res=>{
                console.log(res);
                    navigate("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }
  return (
      
    <div>
        <h1>Edit Player</h1>
        <Link to="/">Back to Home</Link>
        <Form onSubmitProp={updatePet} initialName={pet.name} initialType={pet.type} initialDesc={pet.description} initialSkill={pet.skillOne} initSkill2={pet.skillTwo} initSkill3={pet.skillThree}/>
    </div>
  )
}

export default EditPet;