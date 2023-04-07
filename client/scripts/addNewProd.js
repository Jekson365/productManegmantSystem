import axios from "axios"
import { IPADDRESS } from "../main"

var editWindowInputFileds = document.querySelectorAll(".fields .row input")
var add = document.querySelector(".updateprod")
var remove = document.querySelector(".deleteprod")
var editWindow = document.querySelector(".edit-window")
var addButton = document.querySelector(".add")
var updateButton = document.querySelector(".updateprod")
var addNewButton = document.querySelector(".addprod")


updateButton.addEventListener("click", (e) => {
    // e.preventDefault()
    location.reload()

    // update
    axios.put(`http://${IPADDRESS}:8080/update/${editWindowInputFileds[0].value}`,
        {
            codes: editWindowInputFileds[0].value,
            code: editWindowInputFileds[3].value,
            title: editWindowInputFileds[1].value,
            amount: editWindowInputFileds[5].value,
            price: editWindowInputFileds[2].value,
        }
    )
})

addButton.addEventListener("click", () => {
    editWindow.classList.add("active-edit-window")
})

addNewButton.addEventListener("click", (e) => {
    // e.preventDefault()

    axios.post(`http://${IPADDRESS}:8080/newuser`,
        {
            codes: editWindowInputFileds[0].value,
            code: editWindowInputFileds[3].value,
            title: editWindowInputFileds[1].value,
            amount: editWindowInputFileds[5].value,
            price: editWindowInputFileds[2].value,
        }
    )
    .then((response)=> {
        console.log(response)
    })
    .catch((err)=> {
        console.log(err)
    })

})
remove.addEventListener("click", () => {
    location.reload()

    axios.delete(`http://${IPADDRESS}:8080/delete/${editWindowInputFileds[0].value}`)
})