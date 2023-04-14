require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once('open',() => console.log('connected to database'))

app.use(express.json())

const applicationform = require('./routes/applicationform');
app.use('/applicationform', applicationform)

app.listen(3000, function(){
    console.log('app listen at port 3000')
})

app.get('/', function (req,res) {

})