export const Footer = (parentTag) => {
    const footer = document.createElement("footer")
    footer.className = "bg-dark text-center text-lg-start"
    footer.setAttribute("data-bs-theme", "dark")
    parentTag.append(footer)

    const div = document.createElement("div")
    div.className = "text-center p-3 text-white-50"
    div.textContent = "© 2023 Copyright: "
    footer.append(div)

    const a = document.createElement("a")
    a.className = "text-white-50"
    a.textContent = "John Garcia"
    div.append(a)
}