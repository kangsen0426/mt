   
   //建立数据库模型

   import mongoose from "mongoose"

   const Schema = mongoose.Schema
   const UserSchems = new Schema({
       username:{
           type:String,
           unique:true,//唯一
           require:true //必需
       },
       password:{
           type:String,
           require:true
       },
       email:{
           type:String,
           require:true
       }
   })


   export default mongoose.model('User',UserSchems)