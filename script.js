const btnNo = document.querySelector("#btn-random");
let moveCount = 0; // Contador para limitar los movimientos
const maxMoves = 5; // Máximo de movimientos permitidos

function moverAleatoriamente(btn) {
    if (moveCount >= maxMoves) {
        btn.style.position = "static"; // Deja de moverse
        btn.textContent = "Ya no puede escapar 😈";
        return;
    }
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    moveCount++;
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});
