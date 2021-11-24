const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quotesDisplay(data))
}

loadQuotes();
const quotesDisplay = quote => {
    const quotesContainer = document.getElementById('quote');
    quotesContainer.innerText = quote.quote;

}