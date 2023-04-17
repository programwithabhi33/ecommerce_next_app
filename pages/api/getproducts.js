import { connect } from "mongoose"
import connectDb from "../../middleware/mongoose"
import Products from "../../models/Products"
const handler = async (req,res)=>{
    let products = await Products.find();

    let laptops = {};
    for(let item of products){
        if(item.title in laptops){
            if(!laptops[item.title].color.includes(item.color) && item.quantity > 0){
                laptops[item.title].color.push(item.color)
            }
            if(!laptops[item.title].size.includes(item.size) && item.quantity > 0){
                laptops[item.title].size.push(item.size)
            }
        }
        else{
            laptops[item.title] = {};
            if(item.quantity > 0){
                laptops[item.title] = JSON.parse(JSON.stringify(item));
                laptops[item.title].color = [item.color];
                laptops[item.title].size = [item.size];
            }
        }
    }
    res.status(200).json({laptops})
}

export default connectDb(handler);