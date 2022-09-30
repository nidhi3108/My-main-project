const {Schema, model, Types} = require('../connection');
const myschema=new Schema({
    title:String,
    description:String,
    file:String,
    thumbnail:String,
    createdBy:{type:Types.ObjectId, ref:"users"},
    createdAt:Date,
});
module.exports=model('podcasts', myschema);