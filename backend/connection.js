const mongoose=require('mongoose');
const db = 'mymainproject'
const dbUrl = `mongodb+srv://nidhi3108:123Nid45@cluster0.u5hhcyg.mongodb.net/${db}?retryWrites=true&w=majority`;
mongoose.connect(dbUrl)
.then((result)=>{
    console.log('database connected');
})
.catch((err)=>{
    console.log(err);
});
module.exports=mongoose;