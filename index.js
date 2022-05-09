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
    findPrevPosition();
    setPosition();
    makeTimer();
  });

  btnNext.addEventListener('click',() => {
    findNextPosition();
    setPosition();
    makeTimer();
  });

  const findNextPosition = () => {
    if(position === -(itemsCount-slideToScroll)*itemWidth)position=555;
    const itemsRight = itemsCount - (Math.abs(position) / itemWidth) - slideToScroll;
    if(itemsRight >= slideToScroll)position -= movePosition;
  };

  const findPrevPosition = () => {
    if(position === 0)position=-(itemsCount*itemWidth);
    const itemsLeft = Math.abs(position) / itemWidth;
    if(itemsLeft >= slideToScroll)position += movePosition;
  };

   const setPosition = () => {
     track.style.transform = `translateX(${position}px)`;
   };

  var timer = 0;
  makeTimer();
  function makeTimer(){
    clearInterval(timer)
    timer = setInterval(function(){
      findNextPosition();
      setPosition();
    },5000);
  }





  const buttonslide1 = document.querySelector('.btn_sld1');
  const buttonslide2 = document.querySelector('.btn_sld2');
  const buttonslide3 = document.querySelector('.btn_sld3');
  const buttonslide4 = document.querySelector('.btn_sld4');

  const changeSlide = (val) => {
    position=-(val*itemWidth);
    setPosition();
    makeTimer();
  }
  buttonslide1.addEventListener('click',() => {changeSlide(buttonslide1.value);});
  buttonslide2.addEventListener('click',() => {changeSlide(buttonslide2.value);});
  buttonslide3.addEventListener('click',() => {changeSlide(buttonslide3.value);});
  buttonslide4.addEventListener('click',() => {changeSlide(buttonslide4.value);});




