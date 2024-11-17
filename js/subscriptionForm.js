export const subscriptionHandler = () => {
    const submitButton = document.querySelector(".subscription__button");
    const input = document.querySelector(".subscription__input");
    if (!input || !submitButton) return;

    submitButton.addEventListener("click", () => {
        console.log(input.name, input.value);
        input.value = "";
    })
}