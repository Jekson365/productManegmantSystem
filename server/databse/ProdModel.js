import mongoose from "mongoose";

const Product = mongoose.model('product',
    {
        code:Number,
        codes:Number,
        title:String,
        amount:Number,
        price:Number,
    }
)

export default Product