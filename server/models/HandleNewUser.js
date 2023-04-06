import mongoose, { mongo } from "mongoose"
import Product from "../databse/ProdModel.js"


export async function PostNewUser(req, res) {

    const { codes, code, title, price, amount } = req.body

    var checkIfNum = /^\d+$/

    if (checkIfNum.test(codes) && checkIfNum.test(code)) {
        if (title.length > 3) {
            try {

                const newItem = new Product(req.body)

                newItem.save()
                    .then(() => {

                        console.log("pushed to database!")

                    })
                    .catch((err)=> {
                        if (err.code === 11000) {
                            res.status(11000)
                            console.log("item already exists")
                        }
                        else {
                            console.log("error!")
                        }
                    })
            }
            catch (err) {
                throw err    
            }
        }
        else {
            console.log("failed!")
        }
    }
    else {
        console.log("failed!")
    }

    res.status(200)
    res.send("success")
}

export async function deleteUser(req, res) {
    var prodId = req.params.id
    try {
        var deletedUser = await Product.deleteOne({ _id: prodId })
        console.log("user deleted")
    }
    catch (err) {
        throw err;
    }

    res.send("user deleted")
}
export async function updateById(req, res) {
    try {
        var filter = { codes: req.params.codes }
        var _update = req.body

        var updateProduct = await Product.findOneAndUpdate(filter, _update)

        console.log(updateProduct)

    }
    catch (err) {
        throw err
    }
    res.send("user updated!")
}

export async function deleteById(req, res) {
    try {
        var filter = { codes: req.params.codes }

        var deletedProduct = await Product.deleteOne(filter)

        console.log("deleted")
    }
    catch (err) {
        throw err
    }
    res.send("deleted!!")
}
export async function findProduct(req,res) {
    try {
        var title = req.params.title
        var searchResult = await Product.find()

    }
    catch(err) {
        throw err
    }
}