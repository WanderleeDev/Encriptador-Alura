//función para agregar una clase a un tag mediante un evento escucha
export function moveBlock(classBtn, classTarget) {
  //selección de icono disparador
  const iconTarget =document.querySelector(classBtn);
  //selección de tag que será  movido
  const tagBlock =document.querySelector(classTarget);

  iconTarget.addEventListener('click', ()=>{
    tagBlock.classList.toggle('moveBlock')
  })
}