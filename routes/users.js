var express = require('express');
var router = express.Router();
const userController=require('../controllers/user.controller');
//const { body } = require('express-validator');

/* GET users listing. */
router.post('/create',userController.createUser);
router.get('/allusers',userController.getallUsers);
router.post('/update',userController.updateUser);
router.post('/delete',userController.deleteUser);
router.get('/:id',userController.findoneuser);



module.exports = router;
