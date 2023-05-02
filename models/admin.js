const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const tabelData=sequelize.define('tabelData',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        alowNull:false,
        primaryKey:true
    },
    orderPrice:Sequelize.INTEGER,
    orderDish:Sequelize.STRING,
    tableN:Sequelize.STRING
})

module.exports=tabelData