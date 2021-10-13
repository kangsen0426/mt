   //建立数据库模型

   import mongoose from "mongoose"

   const Schema = mongoose.Schema

   const MenuSchems = new Schema({
    menu:{
        type:Array,
        unique:true,//唯一
        require:true, //必需
    },
  
})

   export default mongoose.model('Menu',MenuSchems)