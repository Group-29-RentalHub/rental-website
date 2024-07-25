const listings = [
    {
        id: 1,
        name: "Cozy Studio Apartment",
        location: "Downtown, Anytown",
        price: 800,
        bedrooms: 1,
        bathrooms: 1,
        area: 500,
        image: "images/room.jpg",
        description: "A charming studio apartment in the heart of downtown, perfect for young professionals."
    },
    {
        id: 2,
        name: "Spacious Family Home",
        location: "Suburb, Anytown",
        price: 1500,
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        image: "images/house1.jpg",
        description: "A beautiful family home with a large backyard, ideal for growing families."
    },
    {
        id: 3,
        name: "Modern Loft",
        location: "Arts District, Anytown",
        price: 1200,
        bedrooms: 1,
        bathrooms: 1,
        area: 800,
        image: "images/house2.jpg",
        description: "A stylish loft in the trendy Arts District, featuring high ceilings and industrial design."
    },
    {
        id: 4,
        name: "Luxury Penthouse",
        location: "City Center, Anytown",
        price: 3000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "images/room5.jpg",
        description: "An exquisite penthouse with panoramic city views, perfect for those who appreciate the finer things in life."
    },
    {
        id: 4,
        name: "Luxury Penthouse",
        location: "City Center, Anytown",
        price: 3000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "images/room3.jpg",
        description: "An exquisite penthouse with panoramic city views, perfect for those who appreciate the finer things in life."
    },
    {
        id: 4,
        name: "Luxury Penthouse",
        location: "City Center, Anytown",
        price: 3000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        image: "images/room4.jpg",
        description: "An exquisite penthouse with panoramic city views, perfect for those who appreciate the finer things in life."
    }
];

function displayListings() {
    console.log("displayListings function called");
    const container = document.getElementById('listings-container');
    console.log("Container:", container);
    container.innerHTML = '';

    listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.classList.add('listing-card');
        listingElement.innerHTML = `
            <img src="${listing.image}" alt="${listing.name}" class="listing-image">
            <div class="listing-details">
                <h3>${listing.name}</h3>
                <p><strong>Location:</strong> ${listing.location}</p>
                <p><strong>Bedrooms:</strong> ${listing.bedrooms}</p>
                <p><strong>Bathrooms:</strong> ${listing.bathrooms}</p>
                <p><strong>Area:</strong> ${listing.area} sq ft</p>
                <p class="listing-price">$${listing.price}/month</p>
                <a href="#" class="more-info" data-id="${listing.id}">More Information</a>
            </div>
        `;
        container.appendChild(listingElement);
    });

    // Add event listeners to "More Information" buttons
    document.querySelectorAll('.more-info').forEach(button => {
        button.addEventListener('click', showMoreInfo);
    });
}

function showMoreInfo(event) {
    event.preventDefault();
    const listingId = parseInt(event.target.getAttribute('data-id'));
    const listing = listings.find(l => l.id === listingId);
   
    alert(`
        ${listing.name}
       
        ${listing.description}
       
        Location: ${listing.location}
        Price: $${listing.price}/month
        Bedrooms: ${listing.bedrooms}
        Bathrooms: ${listing.bathrooms}
        Area: ${listing.area} sq ft
    `);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    displayListings();
});
