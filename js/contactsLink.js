export const contactsLinkHandler = () => {
    const navLink = document.querySelector(".header__navigation__link[data-special-link]");
    navLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
}