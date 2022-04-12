import Sequelize from "sequelize";

const db = new Sequelize('heroku_892a7a4ffc0665e', 'b9ad69024e0735', '4df32523',{
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
});

export default db;

