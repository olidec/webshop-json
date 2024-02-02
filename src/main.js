import { jsonLoader } from "./utils"

function render(data, targetElement) {
  let priceClass = "price"
  let reducedText = ""

  if (!data.description) { 
    data.description = "[keine Beschreibung]"
  }

  if (data.reducedPrice) {
    data.price = data.reducedPrice
    priceClass += " reduced"
    reducedText = "<span class='reduced-text'>Aktion: </span>"
  }



  targetElement.innerHTML += `
<div class="article">
    <h3>${data.title}</h3>
    <div class="description">
        ${data.description}
    </div>
    <div class="${priceClass}"> 
        ${reducedText}${data.price}
    </div>
</div>
`
}

async function main() {
  const artList = document.getElementById("article-list")

  const data = await jsonLoader("/level-03.json")

  for (let i = 0; i < data.length; i++) {
    render(data[i], artList)
  }
}

document.addEventListener("DOMContentLoaded", main)
