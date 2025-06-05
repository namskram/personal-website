document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.block-page');
    const flipContent = document.getElementById('flip-content');
    let current = 0;

    function showPage(idx, direction = 1) {
        pages.forEach((page, i) => {
            page.classList.remove('active', 'next');
            page.style.display = 'none';
        });

        const prev = current;
        const next = idx;

        if (prev !== next) {
            flipContent.classList.remove('left', 'right');
            flipContent.classList.add('flipping', direction === 1 ? 'right' : 'left');
            pages[prev].classList.add('active');
            pages[next].classList.add('next');
            pages[prev].style.display = 'flex';
            pages[next].style.display = 'flex';

            setTimeout(() => {
                pages[prev].classList.remove('active');
                pages[prev].style.display = 'none';
                pages[next].classList.remove('next');
                pages[next].classList.add('active');
                flipContent.classList.remove('flipping', 'left', 'right');
            }, 400);
        } else {
            pages[next].classList.add('active');
            pages[next].style.display = 'flex';
        }
        current = next;
    }

    document.getElementById('left-arrow').onclick = function() {
        let next = (current - 1 + pages.length) % pages.length;
        showPage(next, -1);
    };
    document.getElementById('right-arrow').onclick = function() {
        let next = (current + 1) % pages.length;
        showPage(next, 1);
    };

    pages.forEach((page, i) => {
        page.classList.remove('active', 'next');
        page.style.display = 'none';
    });
    pages[0].classList.add('active');
    pages[0].style.display = 'flex';

    // Lightbox functionality
    const resumeImg = document.querySelector('img[alt="Resume Picture"]');
    const resumeOverlay = document.getElementById('resume-lightbox-overlay');
    const resumeLightboxImg = document.getElementById('resume-lightbox-img');
    if (resumeImg && resumeOverlay && resumeLightboxImg) {
        resumeImg.style.cursor = "pointer";
        resumeImg.addEventListener('click', function() {
            resumeLightboxImg.src = this.src;
            resumeOverlay.classList.add('active');
        });
        resumeOverlay.addEventListener('click', function() {
            resumeOverlay.classList.remove('active');
            resumeLightboxImg.src = '';
        });
    }
});