import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Dashboard() {

  const [pets, setPets] = useState([]);

//   // _______________________________________________________________DELETE
//   const removeItem = petId => {
//     setPets(pets.filter(pet => pet._id !== petId));
//   }
//   const deleteHandler = petId => {
//     axios.delete('http://localhost:8000/api/delete/' + petId).then(res => {
//       removeItem(petId);
//     })
//   }

  // ________________________________________________________________GET ALL PETS
  useEffect(() => {
    axios.get('http://localhost:8000/api/all').then(res => {
        
      setPets(res.data)
    })
  }, [])
  return (
    <div>
        <h2>These pets are looking for a good home</h2>
       <Link to="/add">Add a pet to the shelter</Link>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.sort((a,b)=>a.type.localeCompare(b.type)).map((pet, i) => (
            <tr key={i}>
              <th>{pet.name}</th>
              <td>{pet.type}</td>
              <td><button className="btn btn-danger"><Link to={`/pets/${pet._id}`}>Details</Link></button></td>
              <td><button className="btn btn-danger"><Link to={`/edit/${pet._id}`}>Edit</Link></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard