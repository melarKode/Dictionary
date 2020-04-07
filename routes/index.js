const express = require('express');
const fs = require('fs');
const router = express.Router();
const datapath = './data/dictionary.json';
    
//Home Page
router.get('/', (req,res)=>{
    const dict = fs.readFileSync(datapath);
    res.render('homepage');
});

router.get('/:word',(req,res)=>{
    const dict = JSON.parse(fs.readFileSync(datapath));
    var word = req.params.word;
    var def = dict.word;
    res.render('testing', {word:word, def:def});
});

module.exports = router;