import { connect } from "mongoose"
import connectDb from "../../middleware/mongoose"
import Products from "../../models/Products"
const handler = async (req,res)=>{
    if(req.method == "POST"){
        for(let i = 0; i < req.body.length;i++){
            let pd = new Products({
                title: req.body[i].title,
                desc:  req.body[i].desc,
                quantity:  req.body[i].quantity,
                category:  req.body[i].category,
                slug:  req.body[i].slug,
                size:  req.body[i].size,
                color:  req.body[i].color,
                image:  req.body[i].image,
            })
            await pd.save();
        }
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"Method not allowed"})
    }
}

export default connectDb(handler);