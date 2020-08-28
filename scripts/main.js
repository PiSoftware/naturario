/*
Script de Javascript escrito para la aplicación Naturario
autor @BelenMorales
Licencia X
*/

// Cuando el usuario hace scroll, entonces activa la funcion.
window.onscroll = function() {mySticky()};

// Obtenemos el menu por el id de index
var navbar = document.getElementById("menu");

// Obtenemos la posición offset del menu
var sticky = navbar.offsetTop;

// Añadimos los estilos sticky cuando el menu llegue a su punto en scroll. 
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    //Quitamos la clase sticky cuando el menu llega a su posicion
    navbar.classList.remove("sticky");
  }
}