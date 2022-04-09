//importamos el modelo
import {User, Todo} from "../models/AppModel.js";

/** Métodos para el CRUD TODO */

// Mostrar todos los registros

export const getAllTodo = async (req, res) =>{
    try {
        const todos = await Todo.findAll();
        res.json(todos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getTodo = async (req,res) => {
    try {
        const todo = await Todo.findAll({
            where:{
                id:req.params.id,
                username:req.params.username
            }
        })
        res.json(todo);
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createTodo = async (req,res)=>{
    try {
        await Todo.create(req.body)
        res.json({
            "message": "Se creó correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar el registro

export const updateTodo = async (req, res) =>{
    try{
        await Todo.update(req.body, {
            where: {id: req.params.id,
                    username: req.params.username}
        })
        res.json({
            "message": "Se actualizó correctamente"
        })
    }catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar el registro

export const deleteTodo = async (req,res)=>{
    try {
        await Todo.destroy({
            where: {id: req.params.id,
                    username: req.params.username}
        })
        res.json({
            "message": "Se eliminó correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
/** Métodos para el CRUD user */

export const createUser = async (req,res) => {
    try {
        await User.create(req.body)
        res.json({
            "message": "Se creó correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const getUser = async (req,res) => {
    try {
        const user = await User.findAll({
            where:{
            username:req.params.username
            }
        })
        res.json(user);
    } catch (error) {
        res.json({message: error.message})
    }
}


export const updateUser = async (req, res) =>{
    try{
        await User.update(req.body, {
            where: {username: req.params.username}
        })
        res.json({
            "message": "Se actualizó correctamente"
        })
    }catch (error) {
        res.json({message: error.message})
    }
}