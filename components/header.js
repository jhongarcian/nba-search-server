
export const Header = (app) => {
    const navbar = document.createElement("nav")
    navbar.className = "navbar fixed-top navbar-expand-lg bg-dark px-5"
    navbar.setAttribute("data-bs-theme", "dark")
    app.append(navbar)

    const div = document.createElement("div")
    div.className = "container-fluid"
    navbar.append(div)
    
    const logoName = document.createElement("a")
    logoName.textContent = "NBA MVPS"
    logoName.className = "navbar-brand"
    logoName.href = "#"
    div.append(logoName)

    toggerButton(div)

    const divContainer = document.createElement("div")
    divContainer.className = "collapse navbar-collapse"
    divContainer.id = "navbarSupportedContent"
    div.append(divContainer)

    navList(divContainer)
    createSearch(divContainer)
}

const toggerButton = (parentTag) => {
    const button = document.createElement("button")
    button.className = "navbar-toggler"
    button.type = "button"
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#navbarSupportedContent")
    button.setAttribute("data-bs-target", "#navbarSupportedContent")
    button.setAttribute("aria-controls", "navbarSupportedContent")
    button.setAttribute("aria-expanded", "false")
    button.setAttribute("aria-label", "Toggle navigation")
    parentTag.append(button)

    const span = document.createElement("span")
    span.className = "navbar-toggler-icon"
    button.append(span)
}

const navList = (parentTag) => {

    const ul = document.createElement("ul")
    ul.className = "navbar-nav nav-underline me-auto mb-2 mb-lg-0"
    parentTag.append(ul)

    createNavList(ul, "Historical MVPs")

    createNavList(ul, "Find Your MVP")
}

const createNavList = (parentTag, text) => {
    const historicalLi = document.createElement("li")
    historicalLi.className = "nav-item"
    parentTag.append(historicalLi)

    const historicalAnchor = document.createElement("a")
    historicalAnchor.className = "nav-link"
    historicalAnchor.href = "#"
    historicalAnchor.textContent = text
    historicalLi.append(historicalAnchor)
}

const createSearch = (parentTag) => {
    const form = document.createElement("form")
    form.className = "d-flex"
    form.setAttribute("role","search")
    parentTag.append(form)

    const input = document.createElement("input")
    input.className = "form-control me-2"
    input.type = "search"
    input.placeholder = "Search"
    input.setAttribute("aria-label", "Search")
    form.append(input)

    const button = document.createElement("button")
    button.className = "btn btn-outline-success"
    button.type = "submit"
    button.textContent = "Search"
    form.append(button)
}