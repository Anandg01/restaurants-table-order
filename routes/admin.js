const express=require('express');
const router=express.Router();

const adminControler=require('../controler/admin')

router.get('/getdata',adminControler.getData);
router.post('/addData',adminControler.postData);
router.delete('/delete/:id',adminControler.deleteData)
router.get('/ad',adminControler.add)
module.exports=router;