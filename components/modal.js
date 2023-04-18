
export const createModal = (app) => {
    const divModal = document.createElement("div")
    divModal.className = "modal fade"
    divModal.id = "reg-modal"
    divModal.tabIndex = "-1"
    divModal.setAttribute("aria-labelledby", "modal-title")
    divModal.ariaHidden = "true"
    app.append(divModal)

    const divModalDialog = document.createElement("div")
    divModalDialog.className = "modal-dialog modal-dialog-centered"
    divModal.append(divModalDialog)

    const divModalContent = document.createElement("div")
    divModalContent.className = "modal-content"
    divModalDialog.append(divModalContent)

    const divModalHeader = document.createElement("div")
    divModalHeader.className = "moda-header"
    divModalContent.append(divModalHeader)
    
    const h5 = document.createElement("h5")
    h5.className = "modal-title d-flex justify-content-center py-2"
    h5.id = "modal-title"
    h5.textContent = "MVP output"
    divModalHeader.append(h5)

    const divModalBody = document.createElement("div")
    divModalBody.className = "modal-body d-flex flex-column py-3 align-items-center"
    divModalContent.append(divModalBody)

    const spanYear = document.createElement("span")
    spanYear.className = "py-1"
    spanYear.textContent = "Year: "
    divModalBody.append(spanYear)

    const spanYearValue = document.createElement("span")
    spanYearValue.id = "modal-year"
    spanYear.append(spanYearValue)

    const spanPlayer = document.createElement("span")
    spanPlayer.className = "py-1"
    spanPlayer.textContent = "Player: "
    divModalBody.append(spanPlayer)

    const spanPlayerValue = document.createElement("span")
    spanPlayerValue.id = "modal-player"
    spanPlayer.append(spanPlayerValue)

    const spanTeam = document.createElement("span")
    spanTeam.className = "py-1"
    spanTeam.textContent = "Team: "
    divModalBody.append(spanTeam)

    const spanTeamValue = document.createElement("span")
    spanTeamValue.id = "modal-team"
    spanTeam.append(spanTeamValue)



}
