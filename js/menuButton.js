export const menuButtonHandler = () => {
    const openButton = document.querySelector("[data-menu-open]");
    const closeButton = document.querySelector("[data-menu-close]");
    const menu = document.querySelector("[data-menu]");
    const menuLink = document.querySelector(".menu__navigation__link[data-special-link]");
    if (!closeButton || !openButton || !menu) return;

    openButton.addEventListener("click", () => openMenu(menu));
    closeButton.addEventListener("click", () => closeMenu(menu));
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        closeMenu(menu);
        document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    })
}

function openMenu(menu) {
    if (!menu.classList.contains("is-hidden")) return;

    menu.classList.remove("is-hidden");
}

function closeMenu(menu) {
    if (menu.classList.contains("is-hidden")) return;

    menu.classList.add("is-hidden");
}