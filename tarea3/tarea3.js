let numeroDeSecciones = 0;

const $eliminarVideo = document.querySelector("#eliminar-video");
$eliminarVideo.onclick = function (e) {
  if (numeroDeSecciones > 0) {
    const videoAEliminar = document.querySelector(`
      #seccion${numeroDeSecciones}`);
    document.querySelector("form").removeChild(videoAEliminar);
    numeroDeSecciones--;
  }
  e.preventDefault();
};

function agregarUnaSeccion(numeroDeSecciones) {
  const nodoSeccion = document.createElement("div");
  nodoSeccion.innerHTML = ` <section><label for="horas${numeroDeSecciones}">Horas</label>
    <input type="number" class="horas" name="horas${numeroDeSecciones}" id="horas${numeroDeSecciones}">
    <label for="minutos${numeroDeSecciones}">Minutos</label>
    <input type="number" class="minutos" name="minutos${numeroDeSecciones}" id="minutos${numeroDeSecciones}">
    <label for="segundos${numeroDeSecciones}">Segundos</label>
    <input type="number" class="segundos" name="segundos${numeroDeSecciones}" id="segundos${numeroDeSecciones}"> </section>`;
  nodoSeccion.id = `seccion${numeroDeSecciones}`;
  document.querySelector("form").prepend(nodoSeccion);
}

const $agregarVideo = document.querySelector("#agregar-video");
$agregarVideo.onclick = function (e) {
  numeroDeSecciones++;
  agregarUnaSeccion(numeroDeSecciones);
  e.preventDefault();
};

function calcularTiempo(horas) {
  let tiempoTotal = 0;
  for (let i = 0; i < horas.length; i++) {
    tiempoTotal += Number(horas[i].value);
  }
  return tiempoTotal;
}

function obtenerTiempos() {
  const horasTotales = document.querySelectorAll(".horas");
  const minutosTotales = document.querySelectorAll(".minutos");
  const segundosTotales = document.querySelectorAll(".segundos");

  let horas = calcularTiempo(horasTotales);
  let minutos = calcularTiempo(minutosTotales);
  let segundos = calcularTiempo(segundosTotales);
  return [horas, minutos, segundos];
}

function calcularTiemposTotales(horas, minutos, segundos) {
  const SEGUNDOS_POR_MINUTO = 60;
  if (segundos >= SEGUNDOS_POR_MINUTO) {
    let auxiliarMinutos = Math.trunc(segundos / SEGUNDOS_POR_MINUTO);
    segundos -= auxiliarMinutos * SEGUNDOS_POR_MINUTO;
    minutos += auxiliarMinutos;
  }
  if (minutos >= SEGUNDOS_POR_MINUTO) {
    let auxiliarHoras = Math.trunc(minutos / SEGUNDOS_POR_MINUTO);
    minutos -= auxiliarHoras * SEGUNDOS_POR_MINUTO;
    horas += auxiliarHoras;
  }
  return [horas, minutos, segundos];
}

function mostrarTiemposTotales(horas, minutos, segundos){
  const tiempoTotal =document.querySelector('#tiempo-total');
  const textoTiempoTotal = `El tiempo total es de: ${(horas).toString()} horas, ${(minutos).toString()} minutos y ${(segundos).toString()} segundos`;
  tiempoTotal.textContent = textoTiempoTotal;
}

const $btnCalcularTiempoTotal = document.querySelector("#calcular-tiempo");
$btnCalcularTiempoTotal.onclick = function (e) {
  let [horas, minutos, segundos] = obtenerTiempos();
  [horas, minutos, segundos] = calcularTiemposTotales(horas, minutos, segundos);
  mostrarTiemposTotales(horas, minutos, segundos);
  e.preventDefault();
};
