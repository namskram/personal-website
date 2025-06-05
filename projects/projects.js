document.querySelectorAll('.project-gallery').forEach(function(gallery) {
    const images = gallery.querySelectorAll('.gallery-img');
    let current = 0;

    function show(idx) {
        images.forEach((img, i) => {
            if (i === idx) {
                img.classList.add('active');
                img.style.display = 'block';
                setTimeout(() => img.style.opacity = '1', 10);
            } else {
                img.classList.remove('active');
                img.style.opacity = '0';
                img.style.display = 'none';
            }
        });
    }

    gallery.querySelector('.gallery-arrow.left').onclick = function() {
        images[current].style.opacity = '0';
        current = (current - 1 + images.length) % images.length;
        show(current);
    };
    gallery.querySelector('.gallery-arrow.right').onclick = function() {
        images[current].style.opacity = '0';
        current = (current + 1) % images.length;
        show(current);
    };

    images.forEach((img, i) => {
        img.style.opacity = i === 0 ? '1' : '0';
        img.style.display = i === 0 ? 'block' : 'none';
    });
    show(current);
});

// Lightbox functionality
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.getElementById('lightbox-overlay');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = this.src;
        overlay.classList.add('active');
    });
});

document.getElementById('lightbox-overlay').addEventListener('click', function() {
    this.classList.remove('active');
    document.getElementById('lightbox-img').src = '';
});
