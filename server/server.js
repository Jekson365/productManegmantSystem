import express from 'express'
import mongoose from 'mongoose'
import { PostNewUser, deleteUser, updateById } from './models/HandleNewUser.js'
import cors from 'cors'
import { getProducts } from './models/getAll.js'

const app = express()

app.use(express.json())
app.use(cors())


// routes
app.post("/newuser", PostNewUser)
app.post("/delete/:id",deleteUser)
app.put("/update/:id",updateById)
app.get("/users",getProducts)

    
app.listen(8080, () => {
    try {

        mongoose.connect("mongodb+srv://jeks:Jekojeko123@cluster0.cvg8nw9.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to mongoDb")
    
    }
    catch (err) {
        throw err
    }
    console.log("Server is listening at port 8080")
})