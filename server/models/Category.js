const mongoose = require('mongoose')
//建立数据库的结构
const schema = new mongoose.Schema({
    //字段 name
    name:{type:String},
    //在数据库里创建字段，这里的类型比较特殊，不是string，ref关联的是一个什么模型
    parent:{type:mongoose.SchemaTypes.ObjectId, ref:'Category'}
})
//将这个模型导出的是一个mongo的模型，哪里需要用就去哪里导入，数据库的增删改查需要用
module.exports = mongoose.model('Category',schema)