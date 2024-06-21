/*variable global */
let contador= 0;
document.querySelector(".boton1").addEventListener("click",empezar);

function empezar() {
    document.querySelector(".caja").innerHTML=`
    <button class="boton2">Agregar</button>
    <button class="boton3">Reiniciar</button>
    <div class= "contador"></div>` /* es html*/
    actualizar();/* agrega el uno */
    /*el inner me ayuda a modificar el html */
    document.querySelector(".boton2").addEventListener("click",aumentar);
    document.querySelector(".boton3").onclick=reiniciar;
    /* es lo mismo */
}

function aumentar() {
    ++contador;
    actualizar();
}

function reiniciar() {
    contador=0;
    actualizar();
}

function actualizar() {
    document.querySelector(".contador").innerHTML=contador;
}
