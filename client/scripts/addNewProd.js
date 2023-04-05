import axios from "axios"

var editWindowInputFileds = document.querySelectorAll(".fields .row input")
var add = document.querySelector(".updateprod")
var remove = document.querySelector(".deleteprod")
var editWindow = document.querySelector(".edit-window")
var addButton = document.querySelector(".add")
var updateButton = document.querySelector(".updateprod")
var addNewButton = document.querySelector(".addprod")

class newProduct {
    constructor(codes, code, title, amount, price) {
        this.codes = codes
        this.code = code
        this.title = title
        this.amount = amount
        this.price = price
    }

    edit() {
        console.log(this)
    }
}
updateButton.addEventListener("click", (e) => {
    // e.preventDefault()
    location.reload()
    // update
    axios.put(`http://192.168.100.4:8080/update/${editWindowInputFileds[0].value}`,
        {
            codes: editWindowInputFileds[0].value,
            code: editWindowInputFileds[3].value,
            title: editWindowInputFileds[1].value,
            amount: editWindowInputFileds[5].value,
            price: Number(editWindowInputFileds[2].value).toFixed(5),
        }
    )
})

addButton.addEventListener("click", () => {
    editWindow.classList.add("active-edit-window")
})

addNewButton.addEventListener("click", (e) => {

    axios.post("http://192.168.100.4:8080/newuser",
        {
            codes: editWindowInputFileds[0].value,
            code: editWindowInputFileds[3].value,
            title: editWindowInputFileds[1].value,
            amount: editWindowInputFileds[5].value,
            price: Double(editWindowInputFileds[2].value).toFixed(6),
        }
    )

})
remove.addEventListener("click", () => {
    location.reload()

    axios.delete(`http://192.168.100.4:8080/delete/${editWindowInputFileds[0].value}`)
})