import connectDb from "../../middleware/mongoose"
import User from "../../models/Users"
import CryptoJS from "crypto-js";
import jwt  from "jsonwebtoken";

const handler = async (req,res)=>{
    if(req.method == "POST"){
        let user = await User.findOne({"email":req.body.email});
        if(user){

            // decrypting the database password using secret key e.g., 'secret' and matching this to password that has been come from req.body
            let bytes  = CryptoJS.AES.decrypt(user.password, 'secret');
            let password = bytes.toString(CryptoJS.enc.Utf8);

            if(req.body.password == password){
                let token = jwt.sign({ name:user.name,email:user.email }, 'jwtsecret');
                res.status(200).json({success:true,message:"Your are logged in successfully!",token})
            }
            else{
                res.status(200).json({success:false,message:"Invalid credentials!"})
            }
        }
        else{
            res.status(200).json({success:false,message:"User not found!"})
        }
    }
    else{
        res.status(400).json({error:"Method not allowed"})
    }
}
export default connectDb(handler);