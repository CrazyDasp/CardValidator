import checkNumber from './checkNumber'
import luhnCheck from './luhnCheck'

export function cardValidator() {
    const input = document.querySelector("input")

    input.addEventListener("keyup", () => {
        checkNumber(input.value)
    })  

    const Btn = document.querySelector("button")

    Btn.addEventListener("click", (event) => {
        event.preventDefault()
  
        if (luhnCheck(input.value)) {
            document.querySelector(".result").textContent = "Validator result: Number is a valid"
        } else {
            document.querySelector(".result").textContent = "Validator result: Number is an invalid"
        }
    })

}

