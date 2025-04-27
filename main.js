const b1 = document.querySelector(".b-1")
console.log(b1)
const h8 =document.querySelector(".h-8")



const body = document.querySelector("body")

b1.addEventListener("click",() => {
    body.style.backgroundImage = "url(img2.jpg)"
    h8.textContent= "wizard"
    b1.style.backgroundColor="purple"
})

const b2 = document.querySelector(".b-2")

b2.addEventListener("click",() => {
    console.log(b2)
    body.style.backgroundImage = "url(goblin.png)"
})



