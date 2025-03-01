import hiddenOpacity from "./hiddenOpacity"

export default function checkNumber(number) {
    if (number.match(/^4/)) {
        hiddenOpacity()
        document.querySelector(".visa").style.opacity = "1"
    } else if (number.match(/^34|37/)) {
        hiddenOpacity()
        document.querySelector(".americanExpress").style.opacity = "1"
    } else if (number.match(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/)) {
        hiddenOpacity()
        document.querySelector(".mastercard").style.opacity = "1"
    } else if (number.match(/^220(0|4)/)) {
        hiddenOpacity()
        document.querySelector(".mir").style.opacity = "1"
    } else if (number.match(/^35[2-8][0-9]/)) {
        hiddenOpacity()
        document.querySelector(".jcb").style.opacity = "1"
    } else if (number.match(/^6011|622[1-8][0-9][0-9]|6229[0-2][0-5]|64[5-9]|65/)) {
        hiddenOpacity()
        document.querySelector(".discover").style.opacity = "1"
    } else if (number.match(/^36|54|30[0-5]/)) {
        hiddenOpacity()
        document.querySelector(".dinnersClub").style.opacity = "1"
    } else {
        const cards = document.querySelectorAll("img")
        cards.forEach((card) => {
            card.style.opacity = "1"
        })
    }
  }