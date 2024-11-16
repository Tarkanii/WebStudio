export const filtersHandler = () => {
    const filterButtons = document.querySelectorAll("[data-filter]");
    if (!filterButtons.length) return;

    filterButtons.forEach((button) => {
        const type = button.getAttribute("data-filter");
        
        button.addEventListener("click", () => {
            filterButtons.forEach((filter) => {
                if (!filter.classList.contains("selected")) return;
                
                filter.classList.remove("selected");
            })
            button.classList.add("selected");
            
            filterShowcases(type);
        })
    })
}

function filterShowcases(type) {
    const showcaseList = document.querySelectorAll("[data-type]");
    showcaseList.forEach((showcase) => {
        if (type === "all") {
            if (!showcase.classList.contains("is-hidden")) return;
            
            showcase.classList.remove("is-hidden");
            return;
        }

        const showcaseType = showcase.getAttribute("data-type")
        if (showcaseType === type && showcase.classList.contains("is-hidden")) {
            showcase.classList.remove("is-hidden");
        } else if (showcaseType !== type && !showcase.classList.contains("is-hidden")) {
            showcase.classList.add("is-hidden");
        }
    })
}