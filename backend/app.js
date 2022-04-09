import express from "express";
import cors from 'cors'
import db from "./database/bd.js";

import Approutes from './routes/Routes.js'

const app = express()
app.use(cors())
app.use(express.json()) 
app.use('/todos', Approutes)

try {
    await db.authenticate()
    console.log("conexión exitosa a la db")
} catch (error) {
    console.log(`Error de conexion: ${error}`)
}

app.get('/',(req,res)=>{
    res.send('Hola mundo')
})


app.listen(8000, ()=>{
    console.log('Server is runnig in http://localhost:8000/')
})
