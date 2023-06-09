import express from 'express'
import mongoose from 'mongoose'
import { PostNewUser, deleteById, deleteUser, findProduct, updateById } from './models/HandleNewUser.js'
import cors from 'cors'
import { getProducts } from './models/getAll.js'

export const IPADDRESS = "localhost"

const app = express()

app.use(express.json())
app.use(cors())


// routes
app.post("/newuser", PostNewUser)
app.post("/delete/:id", deleteUser)
app.put("/update/:codes", updateById)
app.get("/products", getProducts)
app.delete("/delete/:codes",deleteById)
app.get("/search/:title",findProduct)


app.listen(8080, IPADDRESS, () => {
    try {

        mongoose.connect("mongodb+srv://jeks:Jekojeko123@cluster0.cvg8nw9.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to mongoDb")

    }
    catch (err) {
        throw err
    }
    console.log("Server is listening at port 8080")
})