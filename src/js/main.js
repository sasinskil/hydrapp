"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const waterGlassWater = document.querySelector('.water-glass__water--js');
const glassCounter = document.querySelector('.water-glass__counter--js');
const addGlassButton = document.querySelector('.actions__add--js');
const removeGlassButton = document.querySelector('.actions__delete--js');
const historyButton = document.querySelector('.history__button--js');
const historyContainer = document.querySelector('.history-container--js');
const hideHistoryButton = document.querySelector('.history-container__hide--button-js');
const tableBody = document.querySelector('.table__body--js');

const key = new Date().toISOString().slice(0,10);

if(localStorage.getItem(key)) {
  glassCounter.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, 0);
  glassCounter.innerHTML = 0;
}

addGlassButton.addEventListener('click', () => {
  glassCounter.innerHTML = parseInt(glassCounter.innerHTML) + 1;
  waterGlassWater.classList.toggle('water-glass__water--animated');
  localStorage.setItem(key, glassCounter.innerHTML);
})

removeGlassButton.addEventListener('click', () => {
  if (parseInt(glassCounter.innerHTML) > 0) {
    glassCounter.innerHTML = parseInt(glassCounter.innerHTML) - 1;
    waterGlassWater.classList.toggle('water-glass__water--animated');
    localStorage.setItem(key, glassCounter.innerHTML);
  } else {
    alert('Nie możesz już usunąć szklanki ;)');
  }
})

historyButton.addEventListener('click', () => {
  historyContainer.classList.add('history-container__visible');
  for( let i = 0 ; i < localStorage.length ; i++) {
    const localStorageValue = localStorage.getItem(localStorage.key(i));
    tableBody.innerHTML = `
      <tr>
        <td>${localStorage.key(i)}</td>
        <td>${localStorageValue}</td>
      </tr>
    `
  }
})

hideHistoryButton.addEventListener('click', () => {
  historyContainer.classList.remove('history-container__visible');
})

