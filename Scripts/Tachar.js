const Items = document.querySelectorAll("p")

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "linea"
    }
    else {
        e.target.className = ""
    }
}

Items.forEach((item) => {
    item.addEventListener("click", toggleDone)
});
