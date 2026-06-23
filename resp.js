// yaad rakho images ko
        const items = document.querySelectorAll('.gallery-item img');
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox img');
        const closeBtn = document.querySelector('.lightbox .close');
        const nextBtn = document.querySelector('.lightbox .next');
        const prevBtn = document.querySelector('.lightbox .prev');

        let current = 0;
        let imgs = Array.from(items);

        function openLightbox(index) {
            current = index;
            lightboxImg.src = imgs[current].src;
            lightbox.style.display = 'flex';
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        function nextImage() {
            current = (current + 1) % imgs.length;
            lightboxImg.src = imgs[current].src;
        }

        function prevImage() {
            current = (current - 1 + imgs.length) % imgs.length;
            lightboxImg.src = imgs[current].src;
        }

        // har image pe click
        imgs.forEach((img, index) => {
            img.addEventListener('click', function() {
                openLightbox(index);
            });
        });

        // controls
        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);

        // bahar click karo toh band ho
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) closeLightbox();
        });