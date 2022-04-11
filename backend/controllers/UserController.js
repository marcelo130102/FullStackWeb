import {User} from "../models/AppModel.js";


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