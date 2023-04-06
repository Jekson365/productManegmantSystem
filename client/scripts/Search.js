import axios from "axios"

var searchInput = document.querySelector(".searchprod")


searchInput.addEventListener("input",(e)=> {
    var value = e.currentTarget.value

    axios.get(`http://192.168.100.4:8080/search/${value}`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err)=> {
            throw err
        })
})