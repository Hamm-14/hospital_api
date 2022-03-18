const express = require('express');  //using express as a server
const port = process.env.PORT || 8000;

const app = express();    //initializing express
const db = require('./config/mongoose');

app.use(express.urlencoded({extended:false}));  //using body parser


app.use('/api',require('./routes/api'));

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server',err);
    }
    console.log('Server is up and running on port:',port);
})