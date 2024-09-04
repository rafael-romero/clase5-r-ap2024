const $botonCalcular = document.querySelector("#btn-calcular");
$botonCalcular.onclick = function(){
  const salarioAnual = document.querySelector("#salario-anual").value;
  const MESES_EN_UN_ANIO = 12;
  const salarioMensual = document.querySelector('#salario-mensual');
  salarioMensual.value = salarioAnual / MESES_EN_UN_ANIO;
  return false;
}
