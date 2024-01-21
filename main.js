let toggle = document.querySelector(".toggle-can input");
let prices = document.querySelectorAll(".card-container__card .price");
// console.log(prices);

toggle.addEventListener("click", () => {
    if (toggle.checked) {
        // Switch to monthly
        prices[0].innerHTML = "&dollar;19.99";
        prices[1].innerHTML = "&dollar;24.99";
        prices[2].innerHTML = "&dollar;39.99";
    } else {
        // Switch back to yearly
        prices[0].innerHTML = "&dollar;199.99";
        prices[1].innerHTML = "&dollar;249.99";
        prices[2].innerHTML = "&dollar;399.99";
    }
})