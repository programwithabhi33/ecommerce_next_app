import { connect } from "mongoose"
import connectDb from "../../middleware/mongoose"
import Products from "../../models/Products"
const handler = async (req,res)=>{
    if(req.method == "POST"){
        console.log(req.body.length)
        for(let i = 0; i < req.body.length;i++){
            console.log("abhishek")
            console.log(req.body[i])
            await Products.findByIdAndUpdate(req.body[i].id,req.body[i])
        }
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"Method not allowed"})
    }
}

export default connectDb(handler);