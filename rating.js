const form = document.querySelector("#form")
let black = 'black'
let review = 0;
const thankYou = document.querySelector("#thankyou")
const rating = document.querySelector("#rating")
const select = document.querySelector('#ratingnumb')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const rev = document.querySelector('input[name="radio"]:checked')
    review = parseInt(rev.value)
    thankYou.classList.remove("d-none")
    rating.classList.add("d-none")
    select.textContent = review
})