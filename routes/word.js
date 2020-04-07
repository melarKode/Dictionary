const express = require('express');
const fs = require('fs');
const router = express.Router();
const datapath = './data/dictionary.json';

router.get('/:word',(req,res)=>{
    var dict = JSON.parse(fs.readFileSync(datapath));
    var word = req.params.word.toLowerCase();
    if(dict[word])
        var def = dict[word];
    else
        var def = "Incorrect word entered";
    res.render('testing', {word:word, def:def});
});

module.exports = router;