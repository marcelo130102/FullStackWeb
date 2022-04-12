import express from "express";
import { createTodo, deleteTodo, getAllTodo, getTodo, updateTodo } from "../controllers/TodoController.js";
import {createUser, updateUser, getUser} from "../controllers/UserController.js"
import {createCarpet, deleteCarpet, getAllCarpet, updateCarpet, getCarpet} from "../controllers/CarpetController.js"

const router = express.Router();

router.post('/createUser', createUser)

router.get('/validate/:username', getUser);

router.put('/data/:username', updateUser)

router.get('/:username/:carpet_u', getAllTodo);

router.get('/todo/:username/:carpet_u/:id', getTodo);

router.post('/:username/:carpet_u', createTodo);

router.put('/:username/:carpet_u/:id', updateTodo);

router.delete('/:username/:carpet_u/:id', deleteTodo)

router.get('/:username' ,getAllCarpet);

router.post('/:username', createCarpet);

router.get('/carpets/:username/:id', getCarpet);

router.put('/:username/:id', updateCarpet);

router.delete('/:username/:id', deleteCarpet)


export default router;
