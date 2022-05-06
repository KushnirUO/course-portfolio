  let position = 0;
  const slideToScroll=1;
  const container = document.querySelector('.slider-item');
  const track = document.querySelector('.slider-track');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');
  const items =document.querySelectorAll('.slider-item');
  const itemsCount = items.length;
  const itemWidth = container.clientWidth;
  const movePosition = itemWidth;

  btnPrev.addEventListener('click',() => {
    const itemsLeft = Math.abs(position) / itemWidth;
    if(itemsLeft >= slideToScroll)position += movePosition;
    setPosition();
    checkBtns();
  });

  btnNext.addEventListener('click',() => {
    const itemsLeft = itemsCount - (Math.abs(position) + slideToScroll * itemWidth) / itemWidth;
    if(itemsLeft >= slideToScroll)position -= movePosition;
    setPosition();
    checkBtns();
  });
   const setPosition = () => {
     track.style.transform = `translateX(${position}px)`;
   };
   const checkBtns = () => {
     if(position === 0)btnPrev.disabled = 1;
     else btnPrev.disabled = 0;
     if(position <= -(itemsCount - slideToScroll) * itemWidth)btnNext.disabled=1;
     else btnNext.disabled=0;
   };
   checkBtns();
