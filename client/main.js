import axios from "axios"
import { toggleWindow } from "./scripts/editWIndow.js"


var dataParent = document.querySelector(".data")

// function to display all data to the screen



axios.get("http://localhost:8080/users")
    .then((res) => {
        var data = res.data
        data.map((each) => {
            dataParent.innerHTML += `
            <div class="row-item" id=${each._id}>
                <div class="w-15 codes">${each.codes}</div>
                <div class="w-15 code">${each.code}</div>
                <div class="w-50 name">${each.title}</div>
                <div class="w-10 price">${each.price}</div>
                <div class="w-10 amount">${each.amount}</div>
            </div>
            `

        })
        var rowItems = document.querySelectorAll(".row-item")

        rowItems.forEach((item) => {
            item.addEventListener("click", (e)=>toggleWindow(res.data,e.currentTarget.id))
        })
    })
    .catch((err) => {
        throw err
    })
