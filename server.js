
if(process.env.NODE_ENV!=='production')
{
    require('dotenv').config();
}

const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');

const indexRouter=require('./routes/index');

app.set('view engine','ejs');
app.set('views', __dirname +'/views');

app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/',indexRouter);

const mongoose=require('mongoose');
// mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connect("mongodb://localhost:27017/mybrary",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Mongodb Connection Successfull");
}).catch((err)=>{
    console.log(err);
});


const db=mongoose.connection;



app.listen(process.env.PORT||4000);