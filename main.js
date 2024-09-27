const firstCard = document.getElementById('card1');
const secondCard = document.getElementById('card2');
const thirdCard = document.getElementById('card3');

const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

const burgerMenu = document.getElementById('burger-menu');
const burgerSidebar = document.getElementById('burger-sidebar');

// burger menu toggle

burgerMenu.addEventListener('click', () => {
  burgerSidebar.classList.toggle('show-burger-nav-buttons');
});

// carousel logic

rightArrow.addEventListener('click', () => {
  if (secondCard.classList.contains('active')) {
    secondCard.classList.add('move-right');
    secondCard.classList.remove('active');
    thirdCard.classList.add('move-right', 'active');
    rightArrow.classList.add('no-show');
  } else if (firstCard.classList.contains('active')) {
    firstCard.classList.remove('active', 'move-left');
    secondCard.classList.remove('move-left');
    secondCard.classList.add('active');
    leftArrow.classList.remove('no-show');
  }
});

leftArrow.addEventListener('click', () => {
  if (secondCard.classList.contains('active')) {
    secondCard.classList.add('move-left');
    secondCard.classList.remove('active');
    firstCard.classList.add('move-left', 'active');
    leftArrow.classList.add('no-show');
  } else if (thirdCard.classList.contains('active')) {
    thirdCard.classList.remove('active', 'move-right');
    secondCard.classList.remove('move-right');
    secondCard.classList.add('active');
    rightArrow.classList.remove('no-show');
  }
});
