import axios from "axios"
import { toggleWindow } from "./scripts/editWIndow.js"


export const IPADDRESS = "localhost"


var dataParent = document.querySelector(".data")

// function to display all data to the screen

export function displayAllData(parentElement, each) {

    parentElement.innerHTML += `

    <div class="row-item" id=${each._id}>
        <div class="w-15 codes">${each.codes}</div>
        <div class="w-15 code">${each.code}</div>
        <div class="w-50 name">${each.title}</div>
        <div class="w-10 price">${each.price}</div>
        <div class="w-10 amount">${each.amount}</div>
    </div>
    `

}

axios.get(`http://${IPADDRESS}:8080/products`)
    .then((res) => {
        var data = res.data
        data.map((each) => {
            displayAllData(dataParent, each)
        })

        var rowItems = document.querySelectorAll(".row-item")

        rowItems.forEach((item) => {
            item.addEventListener("click", (e) => toggleWindow(res.data, e.currentTarget.id,item))
        })

    })
    .catch((err) => {
        throw err
    })
    
