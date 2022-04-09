/* Se importa la conexión a la base de datos */
import db from '../database/bd.js';
import { DataTypes } from 'sequelize';

export const User = db.define('user', {
    username: {type: DataTypes.STRING},
    pass_word: {type: DataTypes.STRING},
})


export const Todo = db.define('todos', {
    username:{type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})


