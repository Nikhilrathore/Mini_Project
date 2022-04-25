const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User= require('./users');

// const port= process.env.PORT || 8001;

mongoose.connect('mongodb+srv://nikhil:nikhil2000@cluster0.xjscy.mongodb.net/tutorial?retryWrites=true&w=majority',
{
  useNewUrlParser:true,
  useUnifiedTopology:true
}
);

User.find({},function(err,users){
    if(err) console.warn(err);
    console.log(users);
})

// app.get('/', (req,res) => res.status(200).send(users));
// app.listen(port, () => console.log(`Listening to Localhost: ${port}`));