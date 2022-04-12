import express from "express";
import cors from 'cors'
import db from "./database/bd.js";
import Approutes from './routes/Routes.js'
//agregando cors

const app = express()
app.use(express.json()) 
app.use(cors())
app.use('/todos', Approutes)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);

try {
    await db.authenticate()
    console.log("conexión exitosa a la db")
} catch (error) {
    console.log(`Error de conexion: ${error}`)
}

app.get('/',(req,res)=>{
    res.send('Hola mundo')
})


app.listen(5000, ()=>{
    console.log('Cors está encendido')
})
