const buy = document.getElementById('buy')
const modal = document.getElementById("modal")
const need = document.getElementById('my')
const modal2 = document.getElementById("modal2")
const buy2 = document.getElementById("buy2")


modal.style.display = "none"
modal2.style.display = "none"

console.log(buy)
function buyClick (event){
    console.log(event)
    modal.style.display = "block"
}
console.log(buy2)
function buy2Click (event){
    console.log(event)
    modal2.style.display = "block"
}

buy.addEventListener("click",buyClick )
need.addEventListener("click",buy2Click )

