import { Header } from "./components/header.js"
import { Footer } from "./components/footer.js"
import { Main } from "./components/main-section.js"

const app = document.querySelector("#app")

const createApp = () => {
    Header(app)
    Main(app)
    Footer(app)
}

createApp()

