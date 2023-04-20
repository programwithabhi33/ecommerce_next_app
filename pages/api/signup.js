import { connect } from "mongoose"
import connectDb from "../../middleware/mongoose"
import User from "../../models/Users"
import CryptoJS from "crypto-js";

const handler = async (req,res)=>{
    if(req.method == "POST"){
        console.log(req.body);
        const {name,email} = req.body;
        // password encryption using the AES.encrypt method with secret key e.g., 'secret'
        let new_user = new User({name,email,password: CryptoJS.AES.encrypt(req.body.password, 'secret').toString()});
        await new_user.save();
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"Method not allowed"})
    }
}

export default connectDb(handler);