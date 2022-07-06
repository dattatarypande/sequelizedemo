const res = require('express/lib/response');
const db=require('../model/index');
const usertbl=db.usertbl;
const sequelize=db.sequelize;
const Sequelize=db.Sequelize;
//const { validationResult } = require('express-validator');


module.exports={
    getallUsers:(req,res,next)=>{
sequelize.query('select * from usertbl',{
    replacements:[],
    type:sequelize.SELECT
}).then((data)=>{
    res.send({error:false,data:data[0]});
}).catch((err)=>{
    res.send({error:true,err:err});
})
    },

findoneuser:(req,res)=>{
let id=req.params.id;
usertbl.findByPk(id)
.then(data=>{
    if(data){
        res.send(data);
    }else{
        res.status(404).send({
            message:`Cannot Find Record with id=${id}.`
        });
    }
})
},
    
    updateUser:(req,res)=>{
        let userid=req.body.id;
        usertbl.update({isActive:false},{where:{id:userid}}).then((data)=>{
            if(data>0){
                res.send({error:false,message:"User Updated"});
            }else{
                res.send({error:false,message:"User Not Updated"});
            }
        }).catch((err)=>{
            res.send({error:true,err:err});
        })

    },deleteUser:(req,res,next)=>{
        let userid=req.body.id;
        usertbl.destroy({where:{id:userid},truncate:false}).then((data)=>{
            if(data>0){
                res.send({error:false,message:"Data Successfully Deleted"});
            }
        }).catch((err)=>{
            res.send({error:true,err:err});
        })

    },
   
    createUser:(req,res,next)=>{
        const user={
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password

        }
        usertbl.create(user).then((data)=>{
            res.send({error:false,data:data,message:"User Successfully Created"});

        }).catch((err)=>{
            res.send({error:true,err:err});
        })
        
    }
}
