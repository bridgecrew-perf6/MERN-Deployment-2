const Pet = require('../model/pet.model')

// ________________________________________ CREATE PET
module.exports.createPet = (req, res) =>{
    const { name, type, description, skillOne, skillTwo, skillThree } = req.body;
    Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
}

// ________________________________________ ALL PETS
module.exports.allPets = (req, res) =>{
    Pet.find({})
        .then(results => res.json(results))
        .catch(err => res.json({error:err}))
}


// ________________________________________ GET ONE PET
module.exports.onePet = (req, res) =>{
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
}

// ________________________________________ UPDATE PET
module.exports.updatePet = (req, res) =>{
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatePet => res.json(updatePet))
        .catch(err => res.status(400).json(err))
}

// ________________________________________ DELETE PET
module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.status(400).json(err))
}


