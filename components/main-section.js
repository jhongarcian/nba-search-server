export const Main = (parentTag) => {
    const main = document.createElement("main")
    main.className = "pb-5"
    parentTag.append(main)

    const img = document.createElement("img")
    img.src = "https://hoopshype.com/wp-content/uploads/sites/92/2022/05/MVP-votes-ranking-seasons-Jokic.png?w=1000&h=600&crop=1"
    img.className = "img-banner"
    main.append(img)

    sectionTitle(main)
    
    const table = document.createElement("div")
    table.className = "px-5"
    main.append(table)

    sectionTable(table)

}

const sectionTitle = (parentTag) => {
    const h1 = document.createElement("h1")
    h1.textContent = "Favorite Basketball MVP"
    h1.className = "pt-5 d-flex justify-content-center"
    parentTag.append(h1)

    const divTextContainer = document.createElement("div")
    divTextContainer.className = "container-fluid d-flex flex-column gap-3 px-5"
    parentTag.append(divTextContainer)

    const span1 = document.createElement("span")
    span1.textContent = `"MVP" stands for Most Valuable Player, which is an award given in various sports to the player who is deemed to have had the most significant impact on their team's success during a given season. In basketball, the MVP award is given out by the National Basketball Association (NBA) and is considered one of the highest honors a player can receive.`
    divTextContainer.append(span1)

    const span2 = document.createElement("span")
    span2.textContent = `The MVP award is typically given to the player who demonstrates exceptional skill, leadership, and performance throughout the season. This can include factors such as scoring, rebounding, assists, and defense, as well as intangible qualities like teamwork and motivation.`
    divTextContainer.append(span2)
}

const sectionTable = (parentTag) => {
    const h2 = document.createElement("h2")
    h2.textContent = "Historical MVPs"
    h2.className = "d-flex justify-content-center pt-5"
    parentTag.append(h2)

    const table = document.createElement("table")
    table.className = "table pt-5"
    parentTag.append(table)

    const thead = document.createElement("thead")
    table.append(thead)

    const tr = document.createElement("tr")
    thead.append(tr)

    createTh(tr, "Year")
    createTh(tr, "Player")
    createTh(tr, "Team")

    const tbody = document.createElement("tbody")
    tbody.id = "mvps-list"
    table.append(tbody)
    
}

const createTh = (parentTag, text) => {
    const th = document.createElement("th")
    th.textContent = text
    th.scope = "col"
    parentTag.append(th)
}

