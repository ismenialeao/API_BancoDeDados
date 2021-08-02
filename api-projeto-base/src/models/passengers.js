const mongoose = require('mongoose')

const passengersSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
    documentNumber: {type: String},
    travelId: {type: String},
}, { 
    versionKey: false
})
// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const passengers = mongoose.model('passengers', passengersSchema);

// exportar o model para ser utilizado
module.exports = passengers;