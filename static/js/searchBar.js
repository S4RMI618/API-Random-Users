const d = document;

export function searchBar(input, cardsSelector) {
    const inputElement = d.querySelector(input);
    const cards = d.querySelectorAll(cardsSelector);

    if (!inputElement || !cards) {
        console.error("Input element or cards not found.");
        return;
    }

    inputElement.addEventListener("keyup", (e) => {
        const searchValue = e.target.value.toLowerCase();

        cards.forEach((card) => {
            const cardName = card.querySelector("h4").textContent.toLowerCase();
            if (cardName.includes(searchValue)) {
                card.classList.remove("filter")
            } else {
                card.classList.add("filter")
            }
        });
    });
}

export default searchBar;
