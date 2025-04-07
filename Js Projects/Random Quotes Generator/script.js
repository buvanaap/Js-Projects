function fetchQuote() {
    fetch('https://quotes-api-self.vercel.app/quote')
        .then(response => response.json())
        .then(msg => generatequote(msg))
}

let quotebox = document.querySelector('.quote-box');
let newinnerhtml = " ";
let quotebtn = document.querySelector('.quote-btn');

function generatequote(msg) {
    newinnerhtml = `<div class="quotes-container">
     <blockquote>"${msg.quote}"</blockquote>
     <p>-${msg.author}</p>
    </div>`;

    quotebox.innerHTML = newinnerhtml
}
quotebtn.addEventListener("click",fetchQuote );