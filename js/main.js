!function(n){var e={};function t(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return n[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(c,r,function(e){return n[e]}.bind(null,r));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\nconst waterGlassWater = document.querySelector('.water-glass__water--js');\r\nconst glassCounter = document.querySelector('.water-glass__counter--js');\r\nconst addGlassButton = document.querySelector('.actions__add--js');\r\nconst removeGlassButton = document.querySelector('.actions__delete--js');\r\nconst historyButton = document.querySelector('.history__button--js');\r\nconst historyContainer = document.querySelector('.history-container--js');\r\nconst hideHistoryButton = document.querySelector('.history-container__hide--button-js');\r\nconst tableBody = document.querySelector('.table__body--js');\r\n\r\nconst key = new Date().toISOString().slice(0,10);\r\n\r\nif(localStorage.getItem(key)) {\r\n  glassCounter.innerHTML = localStorage.getItem(key);\r\n} else {\r\n  localStorage.setItem(key, 0);\r\n  glassCounter.innerHTML = 0;\r\n}\r\n\r\naddGlassButton.addEventListener('click', () => {\r\n  glassCounter.innerHTML = parseInt(glassCounter.innerHTML) + 1;\r\n  waterGlassWater.classList.toggle('water-glass__water--animated');\r\n  localStorage.setItem(key, glassCounter.innerHTML);\r\n})\r\n\r\nremoveGlassButton.addEventListener('click', () => {\r\n  if (parseInt(glassCounter.innerHTML) > 0) {\r\n    glassCounter.innerHTML = parseInt(glassCounter.innerHTML) - 1;\r\n    waterGlassWater.classList.toggle('water-glass__water--animated');\r\n    localStorage.setItem(key, glassCounter.innerHTML);\r\n  } else {\r\n    alert('Nie możesz już usunąć szklanki ;)');\r\n  }\r\n})\r\n\r\nhistoryButton.addEventListener('click', () => {\r\n  historyContainer.classList.add('history-container__visible');\r\n  for( let i = 0 ; i < localStorage.length ; i++) {\r\n    const localStorageValue = localStorage.getItem(localStorage.key(i));\r\n    tableBody.innerHTML = `\r\n      <tr>\r\n        <td>${localStorage.key(i)}</td>\r\n        <td>${localStorageValue}</td>\r\n      </tr>\r\n    `\r\n  }\r\n})\r\n\r\nhideHistoryButton.addEventListener('click', () => {\r\n  historyContainer.classList.remove('history-container__visible');\r\n})\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwyQ0FBMkM7QUFDM0M7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCB3YXRlckdsYXNzV2F0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F0ZXItZ2xhc3NfX3dhdGVyLS1qcycpO1xyXG5jb25zdCBnbGFzc0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F0ZXItZ2xhc3NfX2NvdW50ZXItLWpzJyk7XHJcbmNvbnN0IGFkZEdsYXNzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbnNfX2FkZC0tanMnKTtcclxuY29uc3QgcmVtb3ZlR2xhc3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uc19fZGVsZXRlLS1qcycpO1xyXG5jb25zdCBoaXN0b3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnlfX2J1dHRvbi0tanMnKTtcclxuY29uc3QgaGlzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaXN0b3J5LWNvbnRhaW5lci0tanMnKTtcclxuY29uc3QgaGlkZUhpc3RvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlzdG9yeS1jb250YWluZXJfX2hpZGUtLWJ1dHRvbi1qcycpO1xyXG5jb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHktLWpzJyk7XHJcblxyXG5jb25zdCBrZXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XHJcblxyXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XHJcbiAgZ2xhc3NDb3VudGVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbn0gZWxzZSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAwKTtcclxuICBnbGFzc0NvdW50ZXIuaW5uZXJIVE1MID0gMDtcclxufVxyXG5cclxuYWRkR2xhc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZ2xhc3NDb3VudGVyLmlubmVySFRNTCA9IHBhcnNlSW50KGdsYXNzQ291bnRlci5pbm5lckhUTUwpICsgMTtcclxuICB3YXRlckdsYXNzV2F0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnd2F0ZXItZ2xhc3NfX3dhdGVyLS1hbmltYXRlZCcpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZ2xhc3NDb3VudGVyLmlubmVySFRNTCk7XHJcbn0pXHJcblxyXG5yZW1vdmVHbGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAocGFyc2VJbnQoZ2xhc3NDb3VudGVyLmlubmVySFRNTCkgPiAwKSB7XHJcbiAgICBnbGFzc0NvdW50ZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQoZ2xhc3NDb3VudGVyLmlubmVySFRNTCkgLSAxO1xyXG4gICAgd2F0ZXJHbGFzc1dhdGVyLmNsYXNzTGlzdC50b2dnbGUoJ3dhdGVyLWdsYXNzX193YXRlci0tYW5pbWF0ZWQnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZ2xhc3NDb3VudGVyLmlubmVySFRNTCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KCdOaWUgbW/FvGVzeiBqdcW8IHVzdW7EhcSHIHN6a2xhbmtpIDspJyk7XHJcbiAgfVxyXG59KVxyXG5cclxuaGlzdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBoaXN0b3J5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnktY29udGFpbmVyX192aXNpYmxlJyk7XHJcbiAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aCA7IGkrKykge1xyXG4gICAgY29uc3QgbG9jYWxTdG9yYWdlVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcclxuICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+JHtsb2NhbFN0b3JhZ2Uua2V5KGkpfTwvdGQ+XHJcbiAgICAgICAgPHRkPiR7bG9jYWxTdG9yYWdlVmFsdWV9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIGBcclxuICB9XHJcbn0pXHJcblxyXG5oaWRlSGlzdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBoaXN0b3J5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpc3RvcnktY29udGFpbmVyX192aXNpYmxlJyk7XHJcbn0pXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);