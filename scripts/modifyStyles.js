export function modifyStyles(style1,text,newText,style2) {
    
    //identificación de elementos 
    const image = document.querySelector('.secondSection__img');
    const containerTag= document.querySelector('.outletBox__message');
    const infoMessage = document.querySelector('.outletBox__info');
    const copyBtn= document.querySelector('#btnCopy');

    //ocultar imagen
    image.style.display = style1;
    //mostrar mensaje de confirmación
    infoMessage.textContent= text;
    //agregar el texto nuevo a el bloque seleccionado
    containerTag.textContent= newText;
    //revela btn copiar
    copyBtn.style.display = style2;
  }
  