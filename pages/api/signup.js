import { connect } from "mongoose"
import connectDb from "../../middleware/mongoose"
import User from "../../models/Users"
const handler = async (req,res)=>{
    if(req.method == "POST"){
        console.log(req.body);
        let new_user = new User(req.body);
        await new_user.save();
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"Method not allowed"})
    }
}

export default connectDb(handler);