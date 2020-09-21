const router=require('express').Router
const {add,sub,multiply,divide} =require("../operation")

router.post('/add',add)
router.post('/sub',sub)
router.post('/multiply',multiply)
router.post('/divide',divide)
module.exports=router;