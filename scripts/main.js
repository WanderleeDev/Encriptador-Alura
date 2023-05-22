import { encryptionKeys} from "./keys.js";
import { modifyStyles } from "./modifyStyles.js";


//evento para capturar el mensaje de la caja de texto
export const eventListenerBox = (target,method)=>{

  //captura del objetivo y elimina espacios en blanco al inicio y final
  const message = target.value.trim(); 
  //const regex = /^[a-z\s?\d]+$/; --1 forma de regex--
  const regex = new RegExp('^[a-z\\s?\\d!¡]+$', 'g'); //2 forma de regex con escape de caracteres
  const messageErr = 'No debe contener mayúsculas, caracteres especiales ni acentos(excepto: signos de exclamación)';
  //mensaje de encriptación exitosa
  const successMessage = 'Operación exitosa 😎';
  
  //verifica que el contenido no este vació
  if (!message) {
    alert('Contenido vació');
    return;
  }
  /*verifica que la cadena de texto no tenga:
  letras mayúsculas, acentos o caracteres especiales*/
  if (!regex.test(message)) {
    alert(messageErr);
    target.value= ''; //limpia el cuadro de texto
    target.focus(); //foco en el cuadro de texto
    return
  }

  //encriptación de mensaje
  const newMessage = method(message,encryptionKeys);

  //modificación de estilos 
  modifyStyles('none',successMessage , newMessage,'initial' );
  //retira la clase si es que esta agregada
  document.querySelector('.outletBox__message').classList.remove('copySuccessful');

  target.focus(); //foco en el cuadro de texto
  target.value= ''; //limpia el cuadro de texto
}
