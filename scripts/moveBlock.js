const moveblock = ()=>{
  const iconTarget =document.querySelector('.boxSecret__icon');
  const tagBlock =document.querySelector('.boxSecret');

  iconTarget.addEventListener('click', ()=>{
    tagBlock.classList.toggle()
  })
}