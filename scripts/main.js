//botones
const btnEncryp = document.getElementById('btnEncryp');
const btnDecrypt = document.getElementById('btnDecrypt');
const btnCopy = document.getElementById('btnCopy');
//caja de entrada
const boxMessage = document.getElementById('boxMessage');
//caja de salida
const outletInfo = document.querySelector('.outletBox__info');
const outletMessage = document.querySelector('.outletBox__message');
const image = document.querySelector('.secondSection__img');

//llaves de encriptación
const key1 = "e";//enter
const key2 = "i";//imes
const key3 = "a";//ai
const key4 = "o";//ober
const key5 = "u";//ufat
let keys = [key1, key2, key3, key4, key5].join("|");
let regExp = new RegExp(keys,"g");

//copiar mensaje al portapapeles
function copiar2() {
  outletInfo.select;
  document.execCommand('copy');
}

//función para imprimir mensaje
function encriptar() {
  let tempMessage = outletMessage.value;
  console.log(tempMessage.value);
  image.style.display = 'none';
  outletInfo.style.display = 'none';
  
  outletMessage.textContent = "ahsadashdvsahcadkhfkajjbsbjxjsjsbasbkcaskbcbascbaskbcabcas";
}

btnEncryp.addEventListener('click',function () {
  encriptar();
});
btnCopy.addEventListener("click",function () {
  copiar2(boxMessage);
});
