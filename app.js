const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fs = require('fs');
const ngrok = require('ngrok');
const flash = require('connect-flash');

const PORT = process.env.PORT || 3000;

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body Parser
app.use(express.urlencoded({extended:false}));

//Static
app.use(express.static('views'));

//Connect Flash
app.use(flash());

//Routes
app.use('/', require('./routes/index'));
app.use('/word', require('./routes/word'));

app.listen(PORT, ()=>console.log(`Listening to port ${PORT}`));
ngrok.connect(PORT)
    .then(url=>{
        console.log(url);
    })