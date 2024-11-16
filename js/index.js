import { menuButtonHandler } from "./menuButton.js";
import { filtersHandler } from "./portfolioFilters.js";

document.addEventListener("DOMContentLoaded", () => {
    menuButtonHandler();
    filtersHandler();
})