`use strict`;

let miImage = document.querySelector('img');

miImage.onclick = function () {
    
    let miSrc = miImage.getAttribute('src');
    
    if (miSrc === 'images/genave-2.jpg'){
        miImage.setAttribute('src','images/fortaleza31_244-2.jpg');
    } else {
        miImage.setAttribute('src','images/genave-2.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Génave es fresco, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Génave es fresco, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}