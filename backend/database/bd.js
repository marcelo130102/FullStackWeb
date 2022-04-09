import Sequelize from "sequelize";

const db = new Sequelize('ensolver', 'marcelo', '1301200224012004Mss',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;

