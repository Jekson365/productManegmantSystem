import mongoose from "mongoose";

const Product = mongoose.model('product',
    {

        code:{
            type:Number,
            unique:true,
        },
        codes: {
            type:Number,
            unique:true,
        },
        title:String,
        amount:Number,
        price:Number,
    }
)

export default Product