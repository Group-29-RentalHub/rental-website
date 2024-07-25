const teamMembers = [
    {
        name: "Raj",
        role: "Founder & CEO",
        bio: "With over 15 years of experience in real estate, Sarah founded Rental Hub to revolutionize the rental market.",
        image: "images/raj.jpg"
    },
    {
        name: "Beris",
        role: "Chief Technology Officer",
        bio: "Michael leads our tech team, ensuring Rental Hub stays at the forefront of innovation in the property tech space.",
        image: "images/beris.jpg"
    },
    {
        name: "Trejan",
        role: "Head of Customer Relations",
        bio: "Emily's passion for customer satisfaction drives our commitment to providing exceptional service to all our clients.",
        image: "images/trejan1.jpg"
    },
    {
        name: "David Okonkwo",
        role: "Senior Property Manager",
        bio: "David's extensive knowledge of property management ensures our listings meet the highest standards of quality.",
        image: "images/claire.jpg"
    }
];

function displayTeamMembers() {
    const container = document.getElementById('team-members');
    container.innerHTML = '';

    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('team-member');
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <p>${member.bio}</p>
        `;
        container.appendChild(memberElement);
    });
}

document.addEventListener('DOMContentLoaded', displayTeamMembers);
