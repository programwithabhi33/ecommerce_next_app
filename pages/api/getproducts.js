import { connect } from "mongoose"
import connectDb from "../../middleware/mongoose"
import Products from "../../models/Products"
const handler = async (req,res)=>{
    let products = await Products.find();
    res.status(200).json({products})
}

export default connectDb(handler);