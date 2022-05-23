import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form(props) {
    const [name, setName] = useState([]);
    const [type, setType] = useState([]);
    const [description, setDescription] = useState([]);

    const [skillOne, setSkillOne] = useState([]);
    const [skillTwo, setSkillTwo] = useState([]);
    const [skillThree, setSkillThree] = useState([]);


    const [nameErr, setNameErr] = useState([]);
    const [typeErr, setTypeErr] = useState([]);
    const [descErr, setDescErr] = useState([]);
    const navigate=useNavigate();


    const { onSubmitProp, initialName, initialType, initialDesc, initialSkill, initSkill2, initSkill3 } = props

    useEffect(() => {
        setName(initialName);
        setType(initialType);
        setDescription(initialDesc);
        setSkillOne(initialSkill);
        setSkillTwo(initSkill2);
        setSkillThree(initSkill3);
    }, [props])

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        onSubmitProp({ name, type, description, skillOne, skillTwo, skillThree })
        // navigate("/")
    }

    const validate = () => {
        const nameErr = {}
        const typeErr = {}
        const descErr = {}
        let isValid = true;

        if (name.trimEnd().length < 3) {
            nameErr.Err = "Name is too short!"
            isValid = false;
        }
        if (type.trimEnd().length < 3) {
            typeErr.Err = "Type is too short!"
            isValid = false;
        }
        if (description.trimEnd().length < 3) {
            descErr.Err = "Description is too short!"
            isValid = false;
        };
        setNameErr(nameErr);
        setTypeErr(typeErr);
        setDescErr(descErr);

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Pet Name:</label>
                <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                {Object.keys(nameErr).map((key) => {
                    return <h5 style={{ color: "red" }}>{nameErr[key]}</h5>
                })}
            </div>
            <div className="mb-3">
                <label className="form-label">Pet Type</label>
                <input type="text" className="form-control" value={type} onChange={(e) => { setType(e.target.value) }} />
                {Object.keys(typeErr).map((key) => {
                    return <h5 style={{ color: "red" }}>{typeErr[key]}</h5>
                })}
            </div>
            <div className="mb-3">
                <label className="form-label">Pet Description:</label>
                <input type="text" className="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                {Object.keys(nameErr).map((key) => {
                    return <h5 style={{ color: "red" }}>{nameErr[key]}</h5>
                })}
            </div>
            <h3>Skills  (optional)</h3>
            <div className="mb-3">
                <label className="form-label">Skill 1:</label>
                <input type="text" className="form-control" value={skillOne} onChange={(e) => { setSkillOne(e.target.value) }} />
                
            </div>
            <div className="mb-3">
                <label className="form-label">Skill 2:</label>
                <input type="text" className="form-control" value={skillTwo} onChange={(e) => { setSkillTwo(e.target.value) }} />
                
            </div>
            <div className="mb-3">
                <label className="form-label">Skill 3:</label>
                <input type="text" className="form-control" value={skillThree} onChange={(e) => { setSkillThree(e.target.value) }} />
                
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;