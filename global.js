
function setLocalItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function getLocalItem(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}

function setHearts() {
    const heartDom = document.querySelectorAll(".heart")
    const favorites = getLocalItem("favorites")
    if (!heartDom.length) return
    heartDom.forEach((heart) => {
        const id = heart.dataset.id
        if (favorites.includes(id)) {
            heart.classList.add("active")
        }

    })


}
function hearts() {

    let heartDom = document.querySelectorAll(".heart")
    if (heartDom.length == 0) return

    heartDom.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id
            let favorites = getLocalItem("favorites")
            if (favorites.includes(id)) {
                favorites = favorites.filter(fav => fav !== id)
                btn.classList.remove("active")
            } else {
                favorites.push(id)
                btn.classList.add("active")
            }
            setLocalItem("favorites", favorites)
        })
    })
}



