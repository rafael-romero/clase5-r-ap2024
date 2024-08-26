function cambiarSaludoH1(nombre){
  const $bienvenido = document.querySelector("#bienvenido");
  $bienvenido.textContent = `Bienvenido ${nombre}!`;
}

function mostrarDatosDeUsuario(nombre, segundoNombre, apellido, edad){
  const textoDatosUsuario = `Su nombre es: ${nombre}, su segundo nombre es ${segundoNombre}, su apellido es ${apellido} y su edad ${edad.toString()} años.`;
  const longitudTexto = textoDatosUsuario.length;
  const $datosUsuario = document.querySelector("#datos-usuario");
  $datosUsuario.setAttribute('size', longitudTexto);
  $datosUsuario.value = textoDatosUsuario;
  $datosUsuario.style.display = 'block';
}

function ocultarBtnAccion(boton){
  boton.style.display = 'none';
}

const $btnAccion = document.querySelector('#btn-accion');
$btnAccion.onclick = function(){
  const $nombreDeUsuario = document.querySelector('#nombre-usuario').value;
  const $segundoNombreDeUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
  const $edadUsuario = document.querySelector('#edad-usuario').value;
  cambiarSaludoH1($nombreDeUsuario);
  mostrarDatosDeUsuario($nombreDeUsuario, $segundoNombreDeUsuario, $apellidoUsuario, $edadUsuario);  
  ocultarBtnAccion($btnAccion);
  
  return false;
}
