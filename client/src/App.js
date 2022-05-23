import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPet from './views/AddPet';
import Dashboard from './views/Dashboard';
import EditPet from './views/EditPet';
import ViewPet from './views/ViewPet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Pet Shelter</h1>
       <Routes>
         <Route path="/" element={<Dashboard/>}></Route>
         <Route path="/add" element={<AddPet/>}></Route>
         <Route path="/pets/:id" element={<ViewPet/>}></Route>
         <Route path="/edit/:id" element={<EditPet/>}></Route>
       </Routes>
       
      </header>
    </div>
  );
}

export default App;
