import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

//Conexión DB
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green.bold('Conexion Exitosa a DB'))
    } catch (error) {
        // console.log(error)
        console.log(colors.red.bold( 'Hubo un error al conectar a ala DB'))
    }
}
connectDB ()
// Instancia de express
const server = express()
//Leer datos de formualrios
server.use(express.json())
//Routing
server.use('/api/products',router)

export default server
