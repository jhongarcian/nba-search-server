
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
    divModalContent.id = "modal-target"
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
    divModalBody.id = "modal-body"
    divModalContent.append(divModalBody)

}
