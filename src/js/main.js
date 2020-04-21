"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const addGlassButton = document.querySelector('.button__add--js', '.button__add--js--mobile');
const removeGlassButton = document.querySelector('.button__remove--js', 'button__remove--js--mobile');
const glassCounter = document.querySelector('.view__counter');
let quantityOfGlass = 0;

addGlassButton.addEventListener('click', addGlass);

removeGlassButton.addEventListener('click', removeGlass);

function addGlass() {
  console.log("+")
  quantityOfGlass++;
  glassCounter.innerHTML = quantityOfGlass;
}

function removeGlass() {
  console.log("-");
  if(quantityOfGlass === 0){
    glassCounter.innerHTML = 0;
  } else
  quantityOfGlass--;
  glassCounter.innerHTML = quantityOfGlass;

}