// funciones para carpet

import {Carpet} from "../models/AppModel.js";

export const getAllCarpet = async (req, res) =>{
    try {
        const carpets = await Carpet.findAll({
            where:{
                username:req.params.username
            }
        });
        res.json(carpets)
    } catch (error) {
        res.json( {message: error.message} )
    }
}


export const createCarpet = async (req,res)=>{
    try {
        await Carpet.create(req.body)
        res.json({
            "message": "Se creó correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
} 
        

export const getCarpet = async (req,res) => {
    try {
        const carpet = await Carpet.findAll({
            where:{
                id:req.params.id,
                username:req.params.username
            }
        })
        res.json(carpet);
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteCarpet = async (req,res)=>{
    try {
        await Carpet.destroy({
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


export const updateCarpet = async (req, res) =>{
    try{
        await Carpet.update(req.body, {
            where: {id: req.params.id,
                    username: req.params.username,
            }
        })
        res.json({
            "message": "Se actualizó correctamente"
        })
    }catch (error) {
        res.json({message: error.message})
    }
}