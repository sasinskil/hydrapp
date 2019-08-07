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

const glassCounter = document.querySelector('.water-glass__counter--js');
const addGlassButton = document.querySelector('.actions__add--js');
const removeGlassButton = document.querySelector('.actions__delete--js');
const historyButton = document.querySelector('.history__button--js');
const historyContainer = document.querySelector('.history-container--js');
const hideHistoryButton = document.querySelector('.history-container__hide--button-js');
const tableBody = document.querySelector('.table__body--js');

historyButton.addEventListener('click', (e) => {
  historyContainer.classList.add('history-container__visible');
})

hideHistoryButton.addEventListener('click', (e) => {
  historyContainer.classList.remove('history-container__visible');
})


