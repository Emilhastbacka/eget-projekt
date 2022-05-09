const modal = document.getElementById("myModal");
const knapp = document.getElementById('knapp')
knapp.addEventListener('click', openmodal)
function openmodal() {
    modal.style.display = "block"
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}