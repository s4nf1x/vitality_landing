document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (accordionItems) {
        accordionItems.forEach(item => {
            const trigger = item.querySelector('.accordion-item-header');
            const content = item.querySelector('.accordion-item-content');

            trigger.addEventListener('click', function() {
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
        prevEl: ".testimonials .swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        601: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        1601: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

window.addEventListener('scroll', function() {
    const diagrams = document.querySelectorAll('.circle-svg');

    diagrams.forEach(function(diagram) {
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
    const offset = circumference - (percent / 104) * circumference;

    let startOffset = offsetStart;
    let startPercent = 0;

    const duration = 1500;
    const startTime = performance.now();

    const animate = () => {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const currentPercent = Math.round(progress * percent);
        const currentOffset = circumference - (currentPercent / 100) * circumference;

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






