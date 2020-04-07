const express = require('express');
const fs = require('fs');
const router = express.Router();
const datapath = './data/dictionary.json';
    
//Home Page
router.get('/', (req,res)=>{
    const dict = fs.readFileSync(datapath);
    res.render('homepage');
});

module.exports = router;