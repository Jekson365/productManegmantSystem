const tabs = document.querySelectorAll(".desk")
const switcher = document.querySelectorAll(".tab")



// add event listeners to swich buttons

tabs[0].classList.add("active")
switcher[0].classList.add("active")

switcher.forEach((button)=> {
    button.addEventListener("click",(e)=> {
        switcher.forEach((btn)=> {
            btn.classList.remove("active-button")
        })
        e.currentTarget.classList.add("active-button")

        var id = e.currentTarget.id

        tabs.forEach((tab)=> {
            tab.classList.remove("active")
            var tabId = tab.id
            
            if (id == tabId) {
                tab.classList.add("active")
            }
        })
    })
})
