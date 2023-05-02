const express=require('express');
const cors=require('cors');

const bodyParser = require('body-parser');
const sequelize=require('./util/database')
const adminrout=require('./routes/admin')

const app=express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminrout)

app.use('/',(req, res)=>{
    res.send(`<h1>Jay Shree Ram</h1>`)
})
sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log("Server Running..."))
})
.catch(err=>console.log(err))
