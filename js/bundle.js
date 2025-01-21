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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGLFdBQVcsR0FBR04sUUFBUSxFQUFFLENBQUMsQ0FBQztJQUVwRCxNQUFNUyxjQUFjLEdBQUdsQixJQUFJLENBQUNtQixLQUFLLENBQUNILFFBQVEsR0FBR3hCLE9BQU8sQ0FBQztJQUNyRCxNQUFNNEIsYUFBYSxHQUFHckIsYUFBYSxHQUFJbUIsY0FBYyxHQUFHLEdBQUcsR0FBSW5CLGFBQWE7SUFFNUVELE1BQU0sQ0FBQ2pDLEtBQUssQ0FBQ3dELGdCQUFnQixHQUFHRCxhQUFhO0lBQzdDbkMsT0FBTyxDQUFDTSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUNqQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNnRSxXQUFXLEdBQUksR0FBRUosY0FBZSxHQUFFO0lBRTdGLElBQUlGLFFBQVEsR0FBRyxDQUFDLEVBQUU7TUFDZE8scUJBQXFCLENBQUNWLE9BQU8sQ0FBQztJQUNsQyxDQUFDLE1BQU07TUFDSGYsTUFBTSxDQUFDakMsS0FBSyxDQUFDd0QsZ0JBQWdCLEdBQUdmLE1BQU07TUFDdENyQixPQUFPLENBQUNNLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQ2pDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ2dFLFdBQVcsR0FBSSxHQUFFOUIsT0FBUSxHQUFFO0lBQzFGO0VBQ0osQ0FBQztFQUVEcUIsT0FBTyxDQUFDLENBQUM7QUFDYjs7Ozs7O1VDbEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcclxuXHJcbiAgICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcclxuICAgICAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0taGVhZGVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbnZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi50ZXN0aW1vbmlhbHMtc2xpZGVyXCIsIHtcclxuICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogXCIudGVzdGltb25pYWxzIC5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi50ZXN0aW1vbmlhbHMgLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcclxuICAgICAgICA2MDE6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjM6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XHJcbiAgICAgICAgMTYwMToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkaWFncmFtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXJjbGUtc3ZnJyk7XHJcblxyXG4gICAgZGlhZ3JhbXMuZm9yRWFjaChmdW5jdGlvbihkaWFncmFtKSB7XHJcbiAgICAgICAgaWYgKGRpYWdyYW0uZGF0YXNldC5hbmltYXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gZGlhZ3JhbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRpYWdyYW0uY2xvc2VzdCgnLmRpYWdyYW0taXRlbScpLnF1ZXJ5U2VsZWN0b3IoJy5wZXJjZW50Jyk7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHBlcmNlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJjZW50Jyk7XHJcblxyXG4gICAgICAgIGlmIChyZWN0LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiByZWN0LmJvdHRvbSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVDaXJjbGUoZGlhZ3JhbSwgcGVyY2VudCk7XHJcbiAgICAgICAgICAgIGRpYWdyYW0uZGF0YXNldC5hbmltYXRlZCA9IFwidHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVDaXJjbGUoZGlhZ3JhbSwgcGVyY2VudCkge1xyXG4gICAgY29uc3QgY2lyY2xlID0gZGlhZ3JhbS5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlLWZnJyk7XHJcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiBjaXJjbGUuci5iYXNlVmFsLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IG9mZnNldFN0YXJ0ID0gMC4xICogY2lyY3VtZmVyZW5jZTtcclxuICAgIGNvbnN0IG9mZnNldCA9IGNpcmN1bWZlcmVuY2UgLSAocGVyY2VudCAvIDEwNCkgKiBjaXJjdW1mZXJlbmNlO1xyXG5cclxuICAgIGxldCBzdGFydE9mZnNldCA9IG9mZnNldFN0YXJ0O1xyXG4gICAgbGV0IHN0YXJ0UGVyY2VudCA9IDA7XHJcblxyXG4gICAgY29uc3QgZHVyYXRpb24gPSAxNTAwO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbihlbGFwc2VkVGltZSAvIGR1cmF0aW9uLCAxKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFBlcmNlbnQgPSBNYXRoLnJvdW5kKHByb2dyZXNzICogcGVyY2VudCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE9mZnNldCA9IGNpcmN1bWZlcmVuY2UgLSAoY3VycmVudFBlcmNlbnQgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcclxuXHJcbiAgICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xyXG4gICAgICAgIGRpYWdyYW0uY2xvc2VzdCgnLmRpYWdyYW0taXRlbScpLnF1ZXJ5U2VsZWN0b3IoJy5wZXJjZW50JykudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGVyY2VudH0lYDtcclxuXHJcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIGRpYWdyYW0uY2xvc2VzdCgnLmRpYWdyYW0taXRlbScpLnF1ZXJ5U2VsZWN0b3IoJy5wZXJjZW50JykudGV4dENvbnRlbnQgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYW5pbWF0ZSgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJcbmltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJjaGlsZCIsImFkZCIsInNjcm9sbEhlaWdodCIsInN3aXBlcjEiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwib2JzZXJ2ZVNsaWRlQ2hpbGRyZW4iLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJlbCIsImJyZWFrcG9pbnRzIiwid2luZG93IiwiZGlhZ3JhbXMiLCJkaWFncmFtIiwiZGF0YXNldCIsImFuaW1hdGVkIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBlcmNlbnRFbGVtZW50IiwiY2xvc2VzdCIsInBlcmNlbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0b3AiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImFuaW1hdGVDaXJjbGUiLCJjaXJjbGUiLCJjaXJjdW1mZXJlbmNlIiwiTWF0aCIsIlBJIiwiciIsImJhc2VWYWwiLCJ2YWx1ZSIsIm9mZnNldFN0YXJ0Iiwib2Zmc2V0Iiwic3RhcnRPZmZzZXQiLCJzdGFydFBlcmNlbnQiLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiYW5pbWF0ZSIsImN1cnJlbnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJwcm9ncmVzcyIsIm1pbiIsImN1cnJlbnRQZXJjZW50Iiwicm91bmQiLCJjdXJyZW50T2Zmc2V0Iiwic3Ryb2tlRGFzaG9mZnNldCIsInRleHRDb250ZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==