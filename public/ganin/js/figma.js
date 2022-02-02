const homePage =  document.getElementById("pageHome")
const videosPage = document.getElementById("pagevideos")
const homeButton = document.getElementById("home")
const videosButton = document.getElementById("videos")

const localPage = localStorage.getItem("page")

if (localPage === "home"){
    homePage.style.display = "flex"
    videosPage.style.display = "none"
}
if (localPage === "videos"){
    homePage.style.display = "none"
    videosPage.style.display = "flex"
}
if (!localPage){
    homePage.style.display = "none"
}


console.dir(homePage)
console.dir(videosPage)
console.dir(homeButton)
console.dir(videosButton)

homeButton.addEventListener("click", (event) =>{
    console.log('Click homeButton')
    event.preventDefault()
    homePage.style.display = "flex"
    videosPage.style.display = "none"
    localStorage.setItem("page", "home")
})

videosButton.addEventListener("click", (event) =>{
    console.log('Click videosButton')
    event.preventDefault()
    homePage.style.display = "none"
    videosPage.style.display = "flex"
    localStorage.setItem("page", "videos")
})
