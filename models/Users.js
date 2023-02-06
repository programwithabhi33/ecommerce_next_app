import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema = new Schema({
  name:  {type:String,required:true},
  email: {type:String,required:true,unique:true},
  address:   {type:String,required:true},
},{timestamps:true});
// The second argument of object timestamps:true is means create at and update at time automatically added on the database 
export default mongoose.model(UsersSchema)