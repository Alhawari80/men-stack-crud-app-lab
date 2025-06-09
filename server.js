const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();
const PORT =3000;

//database connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", ()=>{
    console.log(`connected to the Database: ${mongoose.connection.name}`)
})

//Parse the form body data
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

 // new code below this line
 const path = require("path");
 app.use(express.static(path.join(__dirname, "public")));
 app.use(morgan('dev'));



 //Require Controller

const carCtrl = require('./controllers/CARS');

//use Controller
app.use('/', carCtrl);
//API's/Rout
app.get('/', async (req , res)=>{
    res.render("index.ejs");
});


 
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
});