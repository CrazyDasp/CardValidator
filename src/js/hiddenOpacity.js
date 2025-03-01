export default function hiddenOpacity() {
    const cards = document.querySelectorAll("img")
    cards.forEach((card) => {
        card.style.opacity = "0.5"
    })
  }