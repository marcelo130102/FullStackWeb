import express from "express";
import { createTodo, createUser, deleteTodo, getAllTodo, getTodo, getUser, updateTodo, updateUser } from "../controllers/AppController.js";

const router = express.Router();

router.post('/createUser', createUser)

router.get('/validate/:username', getUser);

router.put('/data/:username', updateUser)

router.get('/:username', getAllTodo);

router.get('/:username/:id', getTodo);

router.post('/:username', createTodo);

router.put('/:username/:id', updateTodo);

router.delete('/:username/:id', deleteTodo)


export default router;
