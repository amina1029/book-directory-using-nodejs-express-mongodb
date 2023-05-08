const express = require('express');
const book = require('./book.js');
const app = express();


app.use(express.json());
app.use('/books',book)



app.listen(3000,(req,res)=>{
    console.log("sever is listening:")
})
