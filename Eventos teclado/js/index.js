window.addEventListener("keydown",teclado);
window.addEventListener("keyup",teclado);
const NAVE=document.querySelector(".nave");
let empezar=false;
let y=0;

function teclado(e) {
    const TECLA=e.key; /*guardo la tecla pulsada */
    (TECLA==="Enter") && (e.type==="keydown")
    ? combustion()
    : NAVE.src="img/nave1.png";
    (TECLA==="ArrowUp" && empezar) && (NAVE.style.bottom=`${y+=10}px`);
    (TECLA==="ArrowDown" && empezar) && (NAVE.style.bottom=`${y-=10}px`);
}

function combustion() {
    NAVE.src="img/nave2.png"
    empezar = true;
}