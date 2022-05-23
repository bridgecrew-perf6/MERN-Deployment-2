const mongoose = require('mongoose')


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name for this player is required!"],
        minlength: [3, "Name is too short!"]
    },
    type:{
        type: String,
        required: [true, "Name for this player is required!"],
        minlength: [3, "Name is too short!"]
    },
    description:{
        type: String,
        required: [true, "Name for this player is required!"],
        minlength: [3, "Name is too short!"]
    },
    skillOne:{
        type: String,
    },
    skillTwo:{
        type: String,
    },
    skillThree:{
        type: String,
    },
    likes:{
        type: String,
    },

}, {timestamps: true })

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;