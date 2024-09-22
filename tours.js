/* let nombre = prompt("¿Cómo te llamás?");
let edad = prompt("¿Cuántos años tenés?");
alert("Hola " + nombre + " de " + edad + " años, ¿te interesaría adquirir tickets?"); */

/* let nombre = prompt("¿Cómo te llamás?");
const span = document.querySelector("#welcome");

if (nombre.length < 2) {
  nombre = prompt("Por error, ingresaste una sola letra. ¿Cómo te llamás?");
}
span.textContent = "Hola, " + nombre; */

let nombre = prompt("¿Cómo te llamás?").toUpperCase();
while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, por favor ingresá al menos 3 letras:",
  ).toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("#i");
i.setAttribute("class", "fa fa-ticket");