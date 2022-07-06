const Sequelize=require('sequelize');
const sequelize=new Sequelize('datta','root','',{
host:'localhost',
dialect:'mysql'
});


sequelize.authenticate().then(()=>{
    console.log("Database Successfully Connected");
}).catch(err=>{
    console.log("Database Not Successfully Not Connected");
})

const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.usertbl=require=require('../model/users.model')(sequelize,Sequelize);
module.exports=db;

