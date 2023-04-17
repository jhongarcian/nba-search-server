import { Header } from "./components/header.js"
import { Footer } from "./components/footer.js"
import { Main } from "./components/main-section.js"

const app = document.querySelector("#app")
const URL = "http://localhost:8080/api/mvps"

const createApp = () => {
    Header(app)
    Main(app)
    Footer(app)
}

createApp()

const settings = {
    url: URL,
    method: "GET"
  };


const fetchData = async () => {
    try{
        const response = await fetch(settings.url, settings)
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.error(error)
    }
}
fetchData()