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

const handleClick = async (e) => {
    const modal = document.querySelector("#modal-body")
    e.preventDefault()
    if(e.target.matches("#button")){
        input.value ? setModalContent(modal) : resetModalContent(modal)
    }
}

async function setModalContent(modal) {
    const divModalBody = removePreviousModal(modal)

    const buttonDataType = button.dataset.type
    let data = undefined

    if(buttonDataType === "number"){
        data = await fetchYear(input.value)
    }
    if(buttonDataType === "text"){
        const lowerCaseValue = input.value.toLowerCase()
        const playerOutput = await fetchPlayer(lowerCaseValue)
        data = playerOutput.sort((a,b)=> a.year - b.year)
    }
    data.forEach(item => {
        const container = document.createElement("div")
        container.className = "container-fluid d-flex flex-column aling-items-center py-1 border-bottom border-light-subtle"
        divModalBody.append(container)
    
        const spanYear = document.createElement("span")
        spanYear.className = "py-1"
        spanYear.textContent = "Year: "
        container.append(spanYear)

        const spanYearValue = document.createElement("span")
        spanYearValue.textContent = item.year
        spanYear.append(spanYearValue)

        const spanPlayer = document.createElement("span")
        spanPlayer.className = "py-1"
        spanPlayer.textContent = "Player: "
        container.append(spanPlayer)

        const spanPlayerValue = document.createElement("span")
        spanPlayerValue.textContent = item.player
        spanPlayer.append(spanPlayerValue)

        const spanTeam = document.createElement("span")
        spanTeam.className = "py-1"
        spanTeam.textContent = "Team: "
        container.append(spanTeam)

        const spanTeamValue = document.createElement("span")
        spanTeamValue.textContent = item.team
        spanTeam.append(spanTeamValue)

    })
    input.value = ""
}

function resetModalContent(modal) {
    removePreviousModal(modal)
    input.value = ""
}

function removePreviousModal(modal){
    const modalTarget = document.querySelector("#modal-target")
    
    modal.remove()

    const divModalBody = document.createElement("div")
    divModalBody.className = "modal-body d-flex flex-column py-3 align-items-center border-bottom border-light-subtle"
    divModalBody.id = "modal-body"
    modalTarget.append(divModalBody)

    return divModalBody
}

const handleKeyUp = async (e) => {
    const value = e.target.value

    if(!value) return
    if(!(isNaN(value * 1))) {
        const data = await fetchYear(value)
        value.length > 4 ? input.setCustomValidity("invalid") : input.setCustomValidity("")
        button.dataset.type = "number"
        if(value.length < 4){
            doButtonTarget("false")
            button.classList = "btn btn-outline-secondary"
        }else { 
            button.classList = "btn btn-outline-secondary"
            doButtonTarget("false")
        }
        if(value.length === 4 && data.length === 1){
            inputCorrect()
            return
        }
        if(value.length === 4 && data.length !== 1){
            inputIncorrect()
            return
        }
    }
    if(isNaN(value * 1)) {
        const lowerCaseValue = value.toLowerCase()
        const data = await fetchPlayer(lowerCaseValue)
        data.length === 0 ? inputIncorrect() : inputCorrect()
        button.dataset.type = "text"
        console.log(data)
    }
}

async function fetchYear(value) {
    try{
        const response = await fetch(`https://nba-search-main.onrender.com/mvp/${value}`, {
                method: "GET"
            })
        const data = await response.json()
        return data
    }catch(error){
        console.warn(error)
    }
}

async function fetchPlayer(value) {
    try{
        const response = await fetch(`https://nba-search-main.onrender.com/mvp/player/${value}`, {
                method: "GET"
            })
        const data = await response.json()
        return data
    }catch(error){
        console.warn(error)
    }
}

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

const inputCorrect = () => {
    input.setCustomValidity("")
    doButtonTarget("true")
    button.classList = "btn btn-outline-success"
    console.log("In our database")
}

const inputIncorrect = () => {
    input.setCustomValidity("invalid")
    doButtonTarget("false")
    button.classList = "btn btn-outline-secondary"
    console.log("Not in our database")
}

document.addEventListener("click", handleClick)
input.addEventListener("keyup", handleKeyUp)

