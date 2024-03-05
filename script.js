const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const textIngresado = document.getElementById("text-input");
const textSalida = document.getElementById("text-salida");

let textoIngresado = "";
let textoSalida = "";
let textoEncriptado = "";
let textoDesencriptado = "";

btnEncriptar.addEventListener("click", () => {
  textoIngresado = textIngresado.value;
  textoEncriptado = encriptar(textoIngresado);
  if (textoEncriptado != "") {
    textSalida.value = textoEncriptado;
  textIngresado.value = "";
  console.log(textoIngresado);
  } else {
    textSalida.innerText = "Ningún mensaje fue encontrado"
  }
});

btnDesencriptar.addEventListener("click", () => {
  textoDesencriptado = desEncriptar(textoEncriptado);
  textSalida.value = textoDesencriptado;
  console.log(textoDesencriptado);
});

function encriptar(texto) {
  const sustituciones = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < texto.length; i++) {
    const letraActual = texto[i];
    let sustituido = false;
    for (let j = 0; j < sustituciones.length; j++) {
      if (letraActual === sustituciones[j][0]) {
        textoEncriptado += sustituciones[j][1];
        sustituido = true;
        break;
      }
    }
    if (!sustituido) {
      textoEncriptado += letraActual;
    }
  }

  return textoEncriptado;
}

function desEncriptar(texto) {
  const sustituciones = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  let textoEncriptado = texto;

  sustituciones.forEach(([sustituto, letra]) => {
    const regex = new RegExp(sustituto, "g");
    textoEncriptado = textoEncriptado.replace(regex, letra);
  });

  return textoEncriptado;
}
