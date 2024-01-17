function calcularFibonacci() {
  let numeroInput = document.getElementById("numeroInput").value;

  if (isNaN(numeroInput) || numeroInput === "") {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  const num = parseInt(numeroInput);

  if (num <= 0) {
    alert("Por favor, ingrese un número positivo.");
    return;
  }

  let fibonacci = [0, 1];

  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  document.getElementById("resultado").innerHTML =
    "La sucesión de Fibonacci de " + num + " es: " + fibonacci.join(", ");
}
