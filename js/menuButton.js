export const menuButtonHandler = () => {
    const openButton = document.querySelector("[data-open]");
    const closeButton = document.querySelector("[data-close]");
    const menu = document.querySelector("[data-menu]");
    if (!closeButton || !openButton || !menu) return;

    openButton.addEventListener("click", () => openMenu(menu));
    closeButton.addEventListener("click", () => closeMenu(menu));
}

function openMenu(menu) {
    if (!menu.classList.contains("is-hidden")) return;

    menu.classList.remove("is-hidden");
}

function closeMenu(menu) {
    if (menu.classList.contains("is-hidden")) return;

    menu.classList.add("is-hidden");
}