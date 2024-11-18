import { menuButtonHandler } from "./menuButton.js";
import { filtersHandler } from "./portfolioFilters.js";
import { requestButtonHandler } from "./requestForm.js"
import { subscriptionHandler } from "./subscriptionForm.js";
import { contactsLinkHandler } from "./contactsLink.js";

document.addEventListener("DOMContentLoaded", () => {
    menuButtonHandler();
    filtersHandler();
    requestButtonHandler();
    subscriptionHandler();
    contactsLinkHandler();
})