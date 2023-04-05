import mongoose, { mongo } from "mongoose"
import Product from "../databse/ProdModel.js"


export async function PostNewUser(req, res) {

    const { codes, code, title, price, amount } = req.body

    var checkIfNum = /^\d+$/

    if (checkIfNum.test(codes) && checkIfNum.test(code)) {
        if (title.length > 3) {
            const newItem = new Product(req.body)
            newItem.save()
                .then(() => {

                    console.log("pushed to database!")

                })
        }
        else {
            console.log("failed!")
        }
    }
    else {
        console.log("failed!")
    }


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
    res.send("user updated!")
}