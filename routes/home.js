var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home',(req,res)=>{
  res.render('home')
})

module.exports = router;
  