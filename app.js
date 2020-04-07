const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body Parser
app.use(express.urlencoded({extended:false}));

//Static
app.use(express.static('views'));

//Routes
app.use('/', require('./routes/index'));
app.use('/word', require('./routes/word'));

app.listen(PORT, ()=>console.log(`Listening to port ${PORT}`));