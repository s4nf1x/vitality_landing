/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');
      trigger.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});
var swiper1 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev"
  },
  pagination: {
    el: ".testimonials .swiper-pagination"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
window.addEventListener('scroll', function () {
  const diagrams = document.querySelectorAll('.circle-svg');
  diagrams.forEach(function (diagram) {
    if (diagram.dataset.animated) return;
    const rect = diagram.getBoundingClientRect();
    const percentElement = diagram.closest('.diagram-item').querySelector('.percent');
    const percent = percentElement.getAttribute('data-percent');
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animateCircle(diagram, percent);
      diagram.dataset.animated = "true";
    }
  });
});
function animateCircle(diagram, percent) {
  const circle = diagram.querySelector('.circle-fg');
  const circumference = 2 * Math.PI * circle.r.baseVal.value;
  const offsetStart = 0.1 * circumference;
  const offset = circumference - percent / 104 * circumference;
  let startOffset = offsetStart;
  let startPercent = 0;
  const duration = 1500;
  const startTime = performance.now();
  const animate = () => {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPercent = Math.round(progress * percent);
    const currentOffset = circumference - currentPercent / 100 * circumference;
    circle.style.strokeDashoffset = currentOffset;
    diagram.closest('.diagram-item').querySelector('.percent').textContent = `${currentPercent}%`;
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      circle.style.strokeDashoffset = offset;
      diagram.closest('.diagram-item').querySelector('.percent').textContent = `${percent}%`;
    }
  };
  animate();
}
function checkVisibility() {
  const blocks = document.querySelectorAll('.animate-block');
  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      setTimeout(() => {
        block.classList.add('animated');
      }, 300);
    } else {
      block.classList.remove('animated');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtRQUNiRixLQUFLLENBQUNoRSxTQUFTLENBQUNNLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsTUFBTTtNQUNIMEQsS0FBSyxDQUFDaEUsU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RDO0VBQ0osQ0FBQyxDQUFDO0FBQ047QUFFQW1CLE1BQU0sQ0FBQy9CLGdCQUFnQixDQUFDLFFBQVEsRUFBRXdFLGVBQWUsQ0FBQztBQUNsRHpDLE1BQU0sQ0FBQy9CLGdCQUFnQixDQUFDLE1BQU0sRUFBRXdFLGVBQWUsQ0FBQzs7Ozs7O1VDdkloRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJyk7XHJcblxyXG4gICAgaWYgKGFjY29yZGlvbkl0ZW1zKSB7XHJcbiAgICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIudGVzdGltb25pYWxzLXNsaWRlclwiLCB7XHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscyAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgcHJldkVsOiBcIi50ZXN0aW1vbmlhbHMgLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIudGVzdGltb25pYWxzIC5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XHJcbiAgICAgICAgNjAxOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDIzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxyXG4gICAgICAgIDE2MDE6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZGlhZ3JhbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2lyY2xlLXN2ZycpO1xyXG5cclxuICAgIGRpYWdyYW1zLmZvckVhY2goZnVuY3Rpb24oZGlhZ3JhbSkge1xyXG4gICAgICAgIGlmIChkaWFncmFtLmRhdGFzZXQuYW5pbWF0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGRpYWdyYW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudEVsZW1lbnQgPSBkaWFncmFtLmNsb3Nlc3QoJy5kaWFncmFtLWl0ZW0nKS5xdWVyeVNlbGVjdG9yKCcucGVyY2VudCcpO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBwZXJjZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyY2VudCcpO1xyXG5cclxuICAgICAgICBpZiAocmVjdC50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgcmVjdC5ib3R0b20gPj0gMCkge1xyXG4gICAgICAgICAgICBhbmltYXRlQ2lyY2xlKGRpYWdyYW0sIHBlcmNlbnQpO1xyXG4gICAgICAgICAgICBkaWFncmFtLmRhdGFzZXQuYW5pbWF0ZWQgPSBcInRydWVcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlQ2lyY2xlKGRpYWdyYW0sIHBlcmNlbnQpIHtcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRpYWdyYW0ucXVlcnlTZWxlY3RvcignLmNpcmNsZS1mZycpO1xyXG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogY2lyY2xlLnIuYmFzZVZhbC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBvZmZzZXRTdGFydCA9IDAuMSAqIGNpcmN1bWZlcmVuY2U7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBjaXJjdW1mZXJlbmNlIC0gKHBlcmNlbnQgLyAxMDQpICogY2lyY3VtZmVyZW5jZTtcclxuXHJcbiAgICBsZXQgc3RhcnRPZmZzZXQgPSBvZmZzZXRTdGFydDtcclxuICAgIGxldCBzdGFydFBlcmNlbnQgPSAwO1xyXG5cclxuICAgIGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZFRpbWUgLyBkdXJhdGlvbiwgMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQZXJjZW50ID0gTWF0aC5yb3VuZChwcm9ncmVzcyAqIHBlcmNlbnQpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBjaXJjdW1mZXJlbmNlIC0gKGN1cnJlbnRQZXJjZW50IC8gMTAwKSAqIGNpcmN1bWZlcmVuY2U7XHJcblxyXG4gICAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gY3VycmVudE9mZnNldDtcclxuICAgICAgICBkaWFncmFtLmNsb3Nlc3QoJy5kaWFncmFtLWl0ZW0nKS5xdWVyeVNlbGVjdG9yKCcucGVyY2VudCcpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBlcmNlbnR9JWA7XHJcblxyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICBkaWFncmFtLmNsb3Nlc3QoJy5kaWFncmFtLWl0ZW0nKS5xdWVyeVNlbGVjdG9yKCcucGVyY2VudCcpLnRleHRDb250ZW50ID0gYCR7cGVyY2VudH0lYDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmlzaWJpbGl0eSgpIHtcclxuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlLWJsb2NrJyk7XHJcblxyXG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBibG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBpc1Zpc2libGUgPSByZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgcmVjdC5ib3R0b20gPj0gMDtcclxuXHJcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrVmlzaWJpbGl0eSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2tWaXNpYmlsaXR5KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiXG5pbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiY2hpbGQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwYWdpbmF0aW9uIiwiZWwiLCJicmVha3BvaW50cyIsIndpbmRvdyIsImRpYWdyYW1zIiwiZGlhZ3JhbSIsImRhdGFzZXQiLCJhbmltYXRlZCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwZXJjZW50RWxlbWVudCIsImNsb3Nlc3QiLCJwZXJjZW50IiwiZ2V0QXR0cmlidXRlIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJhbmltYXRlQ2lyY2xlIiwiY2lyY2xlIiwiY2lyY3VtZmVyZW5jZSIsIk1hdGgiLCJQSSIsInIiLCJiYXNlVmFsIiwidmFsdWUiLCJvZmZzZXRTdGFydCIsIm9mZnNldCIsInN0YXJ0T2Zmc2V0Iiwic3RhcnRQZXJjZW50IiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImFuaW1hdGUiLCJjdXJyZW50VGltZSIsImVsYXBzZWRUaW1lIiwicHJvZ3Jlc3MiLCJtaW4iLCJjdXJyZW50UGVyY2VudCIsInJvdW5kIiwiY3VycmVudE9mZnNldCIsInN0cm9rZURhc2hvZmZzZXQiLCJ0ZXh0Q29udGVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNoZWNrVmlzaWJpbGl0eSIsImJsb2NrcyIsImJsb2NrIiwiaXNWaXNpYmxlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=