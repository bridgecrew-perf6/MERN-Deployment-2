import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

function AddPet() {
    const [pet, setPets] = useState({});
    const navigate = useNavigate();

    // CALL TO CREATE PET
    const createPet = (pet)=>{
        axios.post('http://localhost:8000/api/create', pet)
            .then(res =>{
                // setPets([...pet, res.data]);
                console.log(res.data)
                navigate("/")
            })
            .catch(err =>{
                console.log(err)
            })
    }
  return (
    <div>
        <Link to="/">Back to Home</Link>
        <h2>Know a pet needing a home?</h2>
        <Form onSubmitProp={createPet} initialName="" initialType="" initialDesc="" initialSkill="" initialSkill2="" initSkill3=""/>
    </div>
  )
}

export default AddPet