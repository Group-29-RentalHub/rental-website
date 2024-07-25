function initMap() {
    // Replace these coordinates with the actual coordinates of your office
    const officeLocation = { lat: 40.7128, lng: -74.0060 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: officeLocation,
    });
    
    const marker = new google.maps.Marker({
        position: officeLocation,
        map: map,
        title: "Rental Hub Office"
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, subject, message });
        
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
});
