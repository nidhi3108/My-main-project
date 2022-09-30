//importing express module
const express = require('express');
const app=express();
const port=5000;
const userRouter = require('./router/userRouter');
const utilRouter = require('./router/util');
const podcastRouter = require('./router/podcastRouter');
const cors=require('cors');
//initializing express app


app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}))

app.use('/user',userRouter);
app.use('/util',utilRouter);
app.use('/podcast',podcastRouter);

app.use(express.static('./static/uploads'));

app.listen(port,()=>{
    console.log('express server started...');
});