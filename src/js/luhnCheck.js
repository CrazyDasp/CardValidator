export default function luhnCheck(cardNumber) {
    cardNumber = cardNumber.replace(/\s+/g, '')
    
    if (!/^\d+$/.test(cardNumber)) {
        return false
    }

    let sum = 0
    let shouldDouble = false
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i))

        if (shouldDouble) {
            digit *= 2
            if (digit > 9) {
                digit -= 9
            }
        }

        sum += digit
        shouldDouble = !shouldDouble
    }

    return sum % 10 === 0
}
