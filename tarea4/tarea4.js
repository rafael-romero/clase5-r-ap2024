function crearArreglo(nodeList) {
  const arreglo = [];
  const longitudNodeList = nodeList.length;
  for (let i = 0; i < longitudNodeList; i++) {
    arreglo.push(Number(nodeList[i].textContent));
  }
  return arreglo;
}
const $nodeListaDeNumeros = document.querySelectorAll("li");
const arreglo = crearArreglo($nodeListaDeNumeros);

function calcularPromedio(arreglo) {
  let acumulador = 0;
  const longitudArreglo = arreglo.length;
  for (let i = 0; i < longitudArreglo; i++) {
    acumulador += arreglo[i];
  }
  return (acumulador / longitudArreglo).toFixed(2).toString();
}

function obtenerNumeroMinimo(arreglo) {
  let numeroMinimo = arreglo[0];
  const longitudArreglo = arreglo.length;
  for (let i = 1; i < longitudArreglo; i++) {
    if (numeroMinimo > arreglo[i]) {
      numeroMinimo = arreglo[i];
    }
  }
  return numeroMinimo.toString();
}

function obtenerNumeroMaximo(arreglo) {
  let numeroMaximo = arreglo[0];
  const longitudArreglo = arreglo.length;
  for (let i = 1; i < longitudArreglo; i++) {
    if (numeroMaximo < arreglo[i]) {
      numeroMaximo = arreglo[i];
    }
  }
  return numeroMaximo.toString();
}

function obtenerNumeroMasRepetido(arreglo) {
  let numeroMasRepetido = 0;
  let vecesRepetido = 0;
  for (let i = 0; i < arreglo.length; i++) {
    let numeroDeRepeticiones = 0;
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[i] === arreglo[j]) {
        numeroDeRepeticiones++;
      }
    }
    if (numeroDeRepeticiones > vecesRepetido) {
      vecesRepetido = numeroDeRepeticiones;
      numeroMasRepetido = arreglo[i];
    }
  }
  return numeroMasRepetido.toString();
}

function realizarCalculos() {
  document.querySelector(
    "#promedio"
  ).textContent = `El promedio de numeros es: ${calcularPromedio(arreglo)}`;
  document.querySelector(
    "#numero-minimo"
  ).textContent = `El numero mas pequeño es: ${obtenerNumeroMinimo(arreglo)}`;
  document.querySelector(
    "#numero-maximo"
  ).textContent = `El numero mas grande es: ${obtenerNumeroMaximo(arreglo)}`;
  document.querySelector(
    "#numero-repetido"
  ).textContent = `El numero mas frecuente es: ${obtenerNumeroMasRepetido(
    arreglo
  )}`;
}

realizarCalculos();
