const PetController = require('../controller/pet.controller');


module.exports = (app) =>{
    app.post("/api/create", PetController.createPet);
    app.get("/api/all", PetController.allPets);
    app.get("/api/pet/:id", PetController.onePet);
    app.patch("/api/update/:id", PetController.updatePet);
    app.delete("/api/delete/:id", PetController.deletePet);
}