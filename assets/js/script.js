precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const btn= document.querySelector("#btn")
const result = document.querySelector(".cantidad")
let contador = 0

btn.addEventListener("click", ()=> {
    contador = contador + 1
    result.innerHTML = contador
})

const btnresta = document.querySelector("#btnresta")
const resultresta = document.querySelector (".cantidad")
let contadorresta = 0

btnresta.addEventListener("click", ()=> {
    contador = contador - 1
    resultresta.innerHTML = contador
})

const total = document.querySelector(".precio-final")

btn.addEventListener("click", ()=> {
    let operacion = Number(precio)*Number(contador)
    total.innerHTML = operacion
})