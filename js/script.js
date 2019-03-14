'use strict';
//set background of container with contact information to right side of screen
let target = document.querySelector('.container__contact-left');
let div = document.querySelector('.container__contact-right');

window.onload = window.onresize = function() {
  let coords = target.getBoundingClientRect();
  div.style.left = coords.right + 107 + 'px';
  div.style.right = '0px';
};

//set navbar to top of screen
let nav = document.querySelector('.nav');

document.onscroll = function () {
  let navCoords = nav.getBoundingClientRect();
  if (pageYOffset >= 120 ){
    nav.classList.add('nav-top');
    nav.classList.remove('header__nav')
  } else if (pageYOffset < 120) {
    nav.classList.remove('nav-top');
    nav.classList.add('header__nav')

  }
};

