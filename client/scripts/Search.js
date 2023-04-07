import axios from "axios"
import { IPADDRESS } from "../main"

var searchInput = document.querySelector(".searchprod")


searchInput.addEventListener("input",(e)=> {
    var value = e.currentTarget.value

    axios.get(`http://${IPADDRESS}:8080/search/${value}`)
        .then((res)=> {
            console.log(res)
        })
        .catch((err)=> {
            throw err
        })
})