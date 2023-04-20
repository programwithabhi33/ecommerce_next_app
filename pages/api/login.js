import connectDb from "../../middleware/mongoose"
import User from "../../models/Users"
const handler = async (req,res)=>{
    if(req.method == "POST"){
        let user = await User.findOne({"email":req.body.email});
        if(user){
            if(req.body.password == user.password){
                res.status(200).json({success:true,message:"Your are logged in successfully!"})
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