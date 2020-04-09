const express = require('express');
const fs = require('fs');
const router = express.Router();
var test = './data/testing/D';

router.get('/:word',(req,res)=>{
    var errors = []; 
    var word = req.params.word.toUpperCase();
    var letter = word[0].toUpperCase();
    if(letter.toLowerCase() == letter.toUpperCase())
    {
        errors.push({msg: `No results found for ${req.params.word}`});
    }
    if(errors.length>0)
    {
        res.render('definition', {errors : errors[0], word:'', syno: [], anto: [], def: ''});
    }else{
        test = test+ letter+'.json';
        var dict =JSON.parse(fs.readFileSync(test));
        test = './data/testing/D';
        var meanings = [];
        var antonyms = [];
        var synonyms = [];
        if(dict[word])
        {
            for(var obj in dict[word]["MEANINGS"])
            meanings.push(dict[word]["MEANINGS"][obj]);
            antonyms.push(dict[word]["ANTONYMS"]);
            antonyms = antonyms[0];
            synonyms.push(dict[word]["SYNONYMS"]);  
            synonyms = synonyms[0];
        }
        else
        {
            errors.push({msg: `No results found for ${req.params.word}`});
        }
        if(errors.length>0)
        {
            res.render('definition', {errors: errors[0], word:'', syno: ['N/A'], anto: ['N/A'], def:''});
        }else{
            res.render('definition', {word:word, def:meanings, anto:antonyms, syno: synonyms});
        }
    }
});

module.exports = router;