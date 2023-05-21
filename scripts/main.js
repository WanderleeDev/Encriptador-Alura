//Selección de elementos
const boxMessage = document.querySelector('#boxMessage'); //caja de texto
const encrypt = document.querySelector('#btnEncrypt'); //btn de encriptación


//evento para capturar el mensaje de la caja de texto
const eventListenerBox = (target)=>{

  const message = target.value; //captura del objetivo
  
  //verifica que el contenido no este vació
  if (!message) {
    alert('Contenido vació');
    return;
  }


}

//const replaceValues = ()=>{};
encrypt.addEventListener('click',()=> eventListenerBox(boxMessage));




//llaves de encriptación
const key1 = "e";//enter
const key2 = "i";//imes
const key3 = "a";//ai
const key4 = "o";//ober
const key5 = "u";//ufat
let keys = [key1, key2, key3, key4, key5].join("|");
let regExp = new RegExp(keys,"g");
