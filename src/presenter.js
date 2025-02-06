import CalcularCadena from "./CalculadoraCadena";
const cadenaCaracteres = document.querySelector("#CadenaNumeros");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const calculadora=new CalcularCadena()
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = cadenaCaracteres.value;

  div.innerHTML = "<p>" + calculadora.calcularSumaDeNumerosEnLaCadena(cadena) + "</p>";
});
