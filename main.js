import { Header } from "./components/header.js"
import { Footer } from "./components/footer.js"
import { Main } from "./components/main-section.js"
import { createModal } from "./components/modal.js"

const app = document.querySelector("#app")

const createApp = () => {
    Header(app)
    Main(app)
    Footer(app)
    createModal(app)
}

createApp()

// INPUT
const input = document.querySelector("#input")
const button = document.querySelector("#button")

const doButtonTarget = (isTrue) => {
    if(isTrue === "true"){
        button.setAttribute("data-bs-target", "#reg-modal")
        button.setAttribute("data-bs-toggle", "modal")
    }
    if(isTrue === "false") {
        button.setAttribute("data-bs-target", "")
        button.setAttribute("data-bs-toggle", "")
    }
}


const handleClick = async (e) => {
    const modalYear = document.querySelector("#modal-year")
    const modalPlayer = document.querySelector("#modal-player")
    const modalTeam = document.querySelector("#modal-team")
    e.preventDefault()
    if(e.target.matches("#button")){
        input.value ? setModalContent(modalYear,modalPlayer,modalTeam) : resetModalContent(modalYear,modalPlayer,modalTeam)
        await fetchPlayer()
    }
}

async function setModalContent(modalYear, modalPlayer, modalTeam) {
    const data = await fetchYear(input.value)
        console.log(data)
        modalYear.textContent = data[0].year
        modalPlayer.textContent = data[0].player
        modalTeam.textContent = data[0].team
        input.value = ""
}

function resetModalContent(modalYear, modalPlayer, modalTeam) {
    modalYear.textContent = ""
        modalPlayer.textContent = ""
        modalTeam.textContent = ""
        input.value = ""

}

const handleKeyUp = async (e) => {
    const value = e.target.value

    if(!value) return
    if(!(isNaN(value * 1))) {
        const data = await fetchYear(value)
        value.length > 4 ? input.setCustomValidity("invalid") : input.setCustomValidity("")
        if(value.length < 4){
            doButtonTarget("false")
            button.classList = "btn btn-outline-secondary"
        }else { 
            button.classList = "btn btn-outline-secondary"
            doButtonTarget("false")
        }
        if(value.length === 4 && data.length === 1){
            input.setCustomValidity("")
            doButtonTarget("true")
            button.classList = "btn btn-outline-success"
            console.log("In our database")
            return
        }
        if(value.length === 4 && data.length !== 1){
            input.setCustomValidity("invalid")
            doButtonTarget("false")
            button.classList = "btn btn-outline-secondary"
            console.log("Not in our database")
            return
        }
    }
    if(isNaN(value * 1)) {
        console.log(value)
    }
}

async function fetchYear(value) {
    try{
        const response = await fetch(`http://localhost:8080/mvp/${value}`, {
                method: "GET"
            })
        const data = await response.json()
        return data
    }catch(error){
        console.warn(error)
    }
}

async function fetchPlayer() {
    const value = "Nikola"
    try{
        const response = await fetch(`http://localhost:8080/mvp/player/${value}`, {
                method: "GET"
            })
        const data = await response.json()
        console.log(data)
        return data
    }catch(error){
        console.warn(error)
    }
}

document.addEventListener("click", handleClick)
input.addEventListener("keyup", handleKeyUp)

