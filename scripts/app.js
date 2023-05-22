import { copyToClipboard, copyToClipboardSecret } from "./copyToClipboard.js";
import { eventListenerBox } from "./main.js";
import { encryptMessage, decryptMessage } from "./encryption.js";
import { moveBlock } from "./moveBlock.js";


//Selección de elementos
const boxMessage = document.querySelector('#boxMessage'); //caja de texto
const encrypt = document.querySelector('#btnEncrypt'); //btn de encriptación
const decrypt = document.querySelector('#btnDecrypt');
const btnCopy = document.querySelector('#btnCopy'); //btn copiar
const btnSecretCopy = document.querySelector('.boxSecret__iconCopy');//btn copiar del mensaje secreto


//foco en el cuadro de texto
boxMessage.focus();

//asignación de evento escuchar al btn Encriptar mediante un click
encrypt.addEventListener('click',() => eventListenerBox(boxMessage,encryptMessage));

//asignación de evento escuchar al btn Desencriptar mediante un click
decrypt.addEventListener('click',() => eventListenerBox(boxMessage,decryptMessage));

//copiar al portapapeles
btnCopy.addEventListener('click', ()=> copyToClipboard('.outletBox__message'));

//revelar el bloque con el mensaje secreto
moveBlock('.boxSecret__icon', '.boxSecret');

//copia al portapapeles el mensaje secreto de prueba y vuelve a esconder esconderlo

btnSecretCopy.addEventListener('click', ()=> copyToClipboardSecret('.boxSecret__content'));