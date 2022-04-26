let speedTypingTestEl = document.getElementById('speedTypingTest');
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");
let failMsg = "You Typed Incorrect sentence";

function getRandomQuote() {
    spinnerEl.classList.add("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomQuote = jsonData.content;

            quoteDisplayEl.textContent = randomQuote;
        });

    timerEl.textContent = "0 seconds";
    quoteInputEl.value = "";
}
getRandomQuote();

let counter = 0;


let uniqueId = setInterval(function displayTimer() {
    counter = counter + 1;
    timerEl.textContent = counter + " seconds";
}, 1000);

function displayResult() {
    resultEl.classList.add("d-none");

    spinnerEl.classList.remove("d-none");
    let userEnteredText = quoteInputEl.value;
    let randomQuote = quoteDisplayEl.textContent;
    if (userEnteredText !== randomQuote) {
        spinnerEl.classList.add("d-none");
        resultEl.classList.remove("d-none");
        resultEl.textContent = failMsg;


    } else if (userEnteredText === randomQuote) {
        clearInterval(uniqueId);
        spinnerEl.classList.add("d-none");
        resultEl.classList.remove("d-none");
        resultEl.textContent = "You typed in " + counter + " seconds";
    }
}
submitBtnEl.addEventListener("click", displayResult);

resetBtnEl.addEventListener("click", getRandomQuote);