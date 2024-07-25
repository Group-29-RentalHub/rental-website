document.addEventListener('DOMContentLoaded', function() {
    // Image slider
    const sliderImages = [
        'images/hostel.jpg',
        'images/house2.jpg',
        'images/house1.jpg',
        'images/house3.jpg',
        'images/room4.jpg',
        'images/room1.jpg',
        'images/room.jpg',
        'images/room3.jpg',
        'images/room5.jpg',
        'images/room.jpg',
        
    ];

    const sliderContainer = document.getElementById('image-slider');
    let currentImageIndex = 0;

    function createImageElements() {
        sliderImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Slider image ${index + 1}`;
            if (index === 0) img.classList.add('active');
            sliderContainer.appendChild(img);
        });
    }

    function nextImage() {
        const images = sliderContainer.querySelectorAll('img');
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    createImageElements();
    setInterval(nextImage, 5000); // Change image every 5 seconds

    // Scrollable images
    const scrollableImages = [
        'images/hostel.jpg',
        'images/house2.jpg',
        'images/house1.jpg',
        'images/house3.jpg',
        'images/room4.jpg',
        'images/room1.jpg',
        'images/room.jpg',
        'images/room3.jpg',
        'images/room5.jpg',
        'images/room.jpg',
        
    ];

    const scrollContainer = document.getElementById('scrollable-images');

    scrollableImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Scrollable image ${index + 1}`;
        scrollContainer.appendChild(img);
    });
});
