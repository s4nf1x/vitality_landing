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
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNUyxjQUFjLEdBQUdsQixJQUFJLENBQUNtQixLQUFLLENBQUNILFFBQVEsR0FBR3hCLE9BQU8sQ0FBQztJQUNyRCxNQUFNNEIsYUFBYSxHQUFHckIsYUFBYSxHQUFJbUIsY0FBYyxHQUFHLEdBQUcsR0FBSW5CLGFBQWE7SUFFNUVELE1BQU0sQ0FBQy9CLEtBQUssQ0FBQ3NELGdCQUFnQixHQUFHRCxhQUFhO0lBQzdDbkMsT0FBTyxDQUFDTSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMvQixhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM4RCxXQUFXLEdBQUksR0FBRUosY0FBZSxHQUFFO0lBRTdGLElBQUlGLFFBQVEsR0FBRyxDQUFDLEVBQUU7TUFDZE8scUJBQXFCLENBQUNWLE9BQU8sQ0FBQztJQUNsQyxDQUFDLE1BQU07TUFDSGYsTUFBTSxDQUFDL0IsS0FBSyxDQUFDc0QsZ0JBQWdCLEdBQUdmLE1BQU07TUFDdENyQixPQUFPLENBQUNNLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQy9CLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzhELFdBQVcsR0FBSSxHQUFFOUIsT0FBUSxHQUFFO0lBQzFGO0VBQ0osQ0FBQztFQUVEcUIsT0FBTyxDQUFDLENBQUM7QUFDYjs7Ozs7O1VDL0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcclxuXHJcbiAgICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcclxuICAgICAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0taGVhZGVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbnZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi50ZXN0aW1vbmlhbHMtc2xpZGVyXCIsIHtcclxuICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogXCIudGVzdGltb25pYWxzIC5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgICAgIDYwMToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyMzoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcclxuICAgICAgICAxNjAxOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGRpYWdyYW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZS1zdmcnKTtcclxuXHJcbiAgICBkaWFncmFtcy5mb3JFYWNoKGZ1bmN0aW9uKGRpYWdyYW0pIHtcclxuICAgICAgICBpZiAoZGlhZ3JhbS5kYXRhc2V0LmFuaW1hdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBkaWFncmFtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRFbGVtZW50ID0gZGlhZ3JhbS5jbG9zZXN0KCcuZGlhZ3JhbS1pdGVtJykucXVlcnlTZWxlY3RvcignLnBlcmNlbnQnKTtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gcGVyY2VudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmNlbnQnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlY3QudG9wIDwgd2luZG93LmlubmVySGVpZ2h0ICYmIHJlY3QuYm90dG9tID49IDApIHtcclxuICAgICAgICAgICAgYW5pbWF0ZUNpcmNsZShkaWFncmFtLCBwZXJjZW50KTtcclxuICAgICAgICAgICAgZGlhZ3JhbS5kYXRhc2V0LmFuaW1hdGVkID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZUNpcmNsZShkaWFncmFtLCBwZXJjZW50KSB7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBkaWFncmFtLnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtZmcnKTtcclxuICAgIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIGNpcmNsZS5yLmJhc2VWYWwudmFsdWU7XHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0U3RhcnQgPSAwLjEgKiBjaXJjdW1mZXJlbmNlO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChwZXJjZW50IC8gMTA0KSAqIGNpcmN1bWZlcmVuY2U7XHJcblxyXG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gb2Zmc2V0U3RhcnQ7XHJcbiAgICBsZXQgc3RhcnRQZXJjZW50ID0gMDtcclxuXHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IDE1MDA7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKGVsYXBzZWRUaW1lIC8gZHVyYXRpb24sIDEpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UGVyY2VudCA9IE1hdGgucm91bmQocHJvZ3Jlc3MgKiBwZXJjZW50KTtcclxuICAgICAgICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChjdXJyZW50UGVyY2VudCAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlO1xyXG5cclxuICAgICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAgICAgZGlhZ3JhbS5jbG9zZXN0KCcuZGlhZ3JhbS1pdGVtJykucXVlcnlTZWxlY3RvcignLnBlcmNlbnQnKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQZXJjZW50fSVgO1xyXG5cclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICAgICAgZGlhZ3JhbS5jbG9zZXN0KCcuZGlhZ3JhbS1pdGVtJykucXVlcnlTZWxlY3RvcignLnBlcmNlbnQnKS50ZXh0Q29udGVudCA9IGAke3BlcmNlbnR9JWA7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhbmltYXRlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIlxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWNjb3JkaW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJ0cmlnZ2VyIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdHlsZSIsImhlaWdodCIsImNoaWxkIiwiYWRkIiwic2Nyb2xsSGVpZ2h0Iiwic3dpcGVyMSIsIlN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJ3aW5kb3ciLCJkaWFncmFtcyIsImRpYWdyYW0iLCJkYXRhc2V0IiwiYW5pbWF0ZWQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGVyY2VudEVsZW1lbnQiLCJjbG9zZXN0IiwicGVyY2VudCIsImdldEF0dHJpYnV0ZSIsInRvcCIsImlubmVySGVpZ2h0IiwiYm90dG9tIiwiYW5pbWF0ZUNpcmNsZSIsImNpcmNsZSIsImNpcmN1bWZlcmVuY2UiLCJNYXRoIiwiUEkiLCJyIiwiYmFzZVZhbCIsInZhbHVlIiwib2Zmc2V0U3RhcnQiLCJvZmZzZXQiLCJzdGFydE9mZnNldCIsInN0YXJ0UGVyY2VudCIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJhbmltYXRlIiwiY3VycmVudFRpbWUiLCJlbGFwc2VkVGltZSIsInByb2dyZXNzIiwibWluIiwiY3VycmVudFBlcmNlbnQiLCJyb3VuZCIsImN1cnJlbnRPZmZzZXQiLCJzdHJva2VEYXNob2Zmc2V0IiwidGV4dENvbnRlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9