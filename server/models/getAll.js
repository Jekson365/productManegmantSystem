import Product from "../databse/ProdModel.js"

export async function getProducts(req,res) {
    try {
        const allUser = await Product.find()
        res.json(allUser)
    }
    catch(err) {
        throw err
    }
}