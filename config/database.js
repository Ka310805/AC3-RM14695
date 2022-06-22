//importar o pacote mongoose
const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userAdmin:ka310805@fiaptecnico.g4zhz.mongodb.net/todo_list') 
} 

module.exports = conn
