const imagenPrincipal = document.querySelector("#imagen")
imagenPrincipal.computedStyleMap.borderRadius = "50%"
imagenPrincipal.classList.add("radius")
imagenPrincipal.classList.toggle("radius")
const btn = document.querySelector("#btn")
btn.addEventListener("click", ()=> {imagen.classList.toggle("radius")
title.style.color = "#ff0000"
})
