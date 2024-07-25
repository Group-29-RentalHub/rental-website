
document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = [
        {
            src: 'images/house3.jpg',
            description: 'Comfortable hostel accommodation for budget-conscious travelers',
            title: 'Budget-Friendly Hostel'
        },
        {
            src: 'images/house2.jpg',
            description: 'Spacious family home with modern amenities and a large backyard',
            title: 'Modern Family Home'
        },
        {
            src: 'images/house1.jpg',
            description: 'Charming suburban house with a beautiful garden and cozy interiors',
            title: 'Charming Suburban House'
        },
        {
            src: 'images/house3.jpg',
            description: 'Luxurious villa with panoramic views and high-end finishes',
            title: 'Luxury Villa'
        },
        {
            src: 'images/room4.jpg',
            description: 'Cozy bedroom with elegant decor, perfect for a peaceful night\'s sleep',
            title: 'Elegant Bedroom'
        },
        {
            src: 'images/room1.jpg',
            description: 'Bright and airy room perfect for relaxation and productivity',
            title: 'Bright and Airy Room'
        },
        {
            src: 'images/room.jpg',
            description: 'Stylish room with modern furnishings and a contemporary feel',
            title: 'Modern Stylish Room'
        },
        {
            src: 'images/room3.jpg',
            description: 'Comfortable room with a homey atmosphere and warm lighting',
            title: 'Cozy Homey Room'
        },
        {
            src: 'images/room5.jpg',
            description: 'Spacious room with plenty of natural light and minimalist design',
            title: 'Spacious Minimalist Room'
        }
    ];

    let currentSlide = 0;

    function createSlider() {
        const sliderContainer = document.querySelector('.slider-container');
        sliderImages.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            if (index === 0) slide.classList.add('active');
            
            slide.innerHTML = `
                <img src="${image.src}" alt="${image.title}">
                <div class="slide-description">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                </div>
            `;
            
            sliderContainer.appendChild(slide);
        });
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    createSlider();
    
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Scrollable images
    const scrollableImages = [
        'images/hostel3.jpg',
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
