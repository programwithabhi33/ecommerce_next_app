import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  userId:  {type:String,required:true},
  products: [{title:String,qunatity:Number,category:String}],
  amount:   {type:Number},
  address: {type:String},
});
export default mongoose.models.Order || mongoose.model("Order",OrdersSchema);