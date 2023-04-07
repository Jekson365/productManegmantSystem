var closeBtn = document.querySelector(".close-btn")
var rowItem = document.querySelectorAll(".row-item")

var editWindow = document.querySelector(".edit-window")
var closeWindowButton = document.querySelector(".close-btn")
var editWindowInputFileds = document.querySelectorAll(".fields .row input")


closeWindowButton.addEventListener("click",()=> {
    editWindow.classList.remove("active-edit-window")
} )

export function toggleWindow(data,id,item) {    

    
    data.map((each)=> {
        if (each._id == id) {
            editWindowInputFileds[0].value = each.codes
            editWindowInputFileds[1].value = each.title
            editWindowInputFileds[2].value = each.price
            editWindowInputFileds[3].value = each.code
            editWindowInputFileds[4].value = each.title
            editWindowInputFileds[5].value = each.amount
        }
    })
    
    editWindow.classList.add("active-edit-window")
}

