import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema = new Schema({
  name:  {type:String,required:true},
  email: {type:String,required:true,unique:true},
  password:   {type:String,required:true},
},{timestamps:true});
// The second argument of object timestamps:true is means create at and update at time automatically added on the database 


// adding below because when you run this schema first time the model create on the other hand the another time when you call it or runs it give you error because with the name the model is already there in the database so that reason we gave the mongoose.model = empty object 


mongoose.models = {};
export default mongoose.model("User",UsersSchema)


// export default mongoose.model.User || mongoose.model("User",UsersSchema)