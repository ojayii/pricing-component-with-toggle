let toggle = document.querySelector(".toggle-can input");
let prices = document.querySelectorAll(".card-container__card .price .txt");
// console.log(prices);

toggle.addEventListener("click", () => {
    if (toggle.checked) {
        // Switch to monthly
        prices[0].innerHTML = "19.99";
        prices[1].innerHTML = "24.99";
        prices[2].innerHTML = "39.99";
    } else {
        // Switch back to yearly
        prices[0].innerHTML = "199.99";
        prices[1].innerHTML = "249.99";
        prices[2].innerHTML = "399.99";
    }
})
