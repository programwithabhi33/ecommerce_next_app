import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  title:  {type:String,required:true},
  desc: {type:String},
  quantity:   {type:Number,required:true,default:1},
  category: {type:String},
  slug: { type: String, required:true,unique: true},
  size: { type: String, required:true},
  color: { type: String, required:true},
  image: { type: String, required:true},
});
export default mongoose.models.Product || mongoose.model("Product",ProductsSchema);