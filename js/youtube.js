constelBtn = document.querySelector(".btn-one")

elBtn.addEventListener("click", function(evtt){
    evtt.preventDefault()

    localStorage.removeItem("token")

    let getTokenn = localStorage.getItem("token")
    if (!getTokenn) {
        window.location.replace("https://www.youtube.com/channel/UCGe-f3M36apkvkkbwIYWXng")
    }
})