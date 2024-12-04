const destinations = {
  paris: {
    title: "Paris, France",
    image: "images/paris.jpg",
    description:
      "Paris is renowned as the city of romance and lights, featuring iconic landmarks like the Eiffel Tower and the Louvre, charming streets, and world-class cuisine.",
    languages: "French (official), English widely spoken in tourist areas",
    continent: "Europe",
    food: "Croissants, Escargots, Crème Brûlée, and Ratatouille",
    topThingsToDo: [
      "Visit the Eiffel Tower",
      "Explore the Louvre Museum",
      "Stroll along the Champs-Élysées",
      "Cruise on the Seine River",
    ],
    bestTimeToVisit:
      "April to June or September to November for mild weather and fewer crowds.",
    transportation:
      "Metro, buses, and walking are the best ways to get around Paris.",
  },
  tokyo: {
    title: "Tokyo, Japan",
    image: "images/tokyo.jpeg",
    description:
      "Tokyo is a dynamic blend of traditional culture and cutting-edge technology, offering serene temples, vibrant markets, and the latest trends in fashion and technology.",
    languages: "Japanese (official), limited English in urban areas",
    continent: "Asia",
    food: "Sushi, Ramen, Tempura, and Wagyu Beef",
    topThingsToDo: [
      "Explore the Meiji Shrine",
      "Visit the historic Asakusa district",
      "Experience Shibuya Crossing",
      "Enjoy cherry blossoms in Ueno Park",
    ],
    bestTimeToVisit:
      "March to May (cherry blossoms) or September to November (pleasant weather).",
    transportation:
      "Efficient subway and train systems, plus taxis for convenience.",
  },
  barcelona: {
    title: "Barcelona, Spain",
    image: "images/barcelona.jpg",
    description:
      "Barcelona captivates with its blend of Gothic architecture, the iconic works of Antoni Gaudí, Mediterranean beaches, and a lively arts and food scene.",
    languages:
      "Catalan and Spanish (official), English widely understood in tourist zones",
    continent: "Europe",
    food: "Paella, Tapas, Crema Catalana, and Jamón Ibérico",
    topThingsToDo: [
      "Visit the Sagrada Família",
      "Stroll down La Rambla",
      "Explore Park Güell",
      "Relax at Barceloneta Beach",
    ],
    bestTimeToVisit: "May to June or September to avoid summer crowds.",
    transportation:
      "Metro, buses, and bicycles are excellent for getting around.",
  },
};

const modal = document.getElementById("destination-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalLanguages = document.getElementById("modal-languages");
const modalContinent = document.getElementById("modal-continent");
const modalFood = document.getElementById("modal-food");
const modalTopThingsToDo = document.getElementById("modal-top-things");
const modalBestTimeToVisit = document.getElementById("modal-best-time");
const modalTransportation = document.getElementById("modal-transportation");
const closeModal = document.querySelector(".close");

// Open modal on button click
document.querySelectorAll(".learn-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const destinationKey = button.getAttribute("data-destination");
    const destination = destinations[destinationKey];

    if (destination) {
      modalTitle.textContent = destination.title;
      modalImage.src = destination.image;
      modalImage.alt = destination.title;
      modalDescription.textContent = destination.description;
      modalLanguages.textContent = `Languages Spoken: ${destination.languages}`;
      modalContinent.textContent = `Continent: ${destination.continent}`;
      modalFood.textContent = `Popular Foods: ${destination.food}`;
      modalTopThingsToDo.innerHTML = `Top Things to Do:<ul>${destination.topThingsToDo
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>`;
      modalBestTimeToVisit.textContent = `Best Time to Visit: ${destination.bestTimeToVisit}`;
      modalTransportation.textContent = `Transportation: ${destination.transportation}`;

      modal.style.display = "flex";
    }
  });
});

// Close modal when the "X" is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
