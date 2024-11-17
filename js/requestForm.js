export const requestButtonHandler = () => {
    const openButton = document.querySelector("[data-modal-open]");
    const closeButton = document.querySelector("[data-modal-close]");
    const modalOverlay = document.querySelector("[data-modal]");
    if (!openButton || !closeButton || !modalOverlay) return;

    const submitButton = document.querySelector("[data-submit]");
    const form = document.querySelector(".form");
    openButton.addEventListener("click", () => openModal(modalOverlay));
    modalOverlay.addEventListener("click", (e) => {
        if (!e.target.classList.contains("overlay")) return;
        closeModal(modalOverlay);
    })
    closeButton.addEventListener("click", () => closeModal(modalOverlay));
    closeButton.addEventListener("focusout", (e) => {
        if (!e.relatedTarget
            || e.relatedTarget.nodeName === "INPUT"
            || e.relatedTarget.nodeName === "TEXTAREA"
            || e.relatedTarget.getAttribute("data-submit")
        ) return;
        
        closeModal(modalOverlay);
        setTimeout(() => openButton.focus());
    });
    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
            if (input.type === "checkbox") {
                console.log(input.name, input.checked);
                input.checked = false;
            } else {
                console.log(input.name, input.value);
                input.value = "";
            }
        })
    });
    submitButton.addEventListener("focusout", (e) => {
        if (!e.relatedTarget
            || e.relatedTarget.nodeName === "INPUT"
            || e.relatedTarget.nodeName === "TEXTAREA"
            || e.relatedTarget.getAttribute("data-submit")
        ) return;
        
        closeModal(modalOverlay);
        setTimeout(() => {
            window.focus();
            openButton.focus();
        });
    });
}

function openModal(modal) {
    if (!modal.classList.contains("is-hidden")) return;
    modal.classList.remove("is-hidden");
    setTimeout(() => document.querySelector(".form__input[name = name]").focus(), 200);
}

function closeModal(modal) {
    if (modal.classList.contains("is-hidden")) return;
    modal.classList.add("is-hidden");
}