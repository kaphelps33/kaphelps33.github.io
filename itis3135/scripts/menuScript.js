// Function to fetch menu data and populate the target container
function loadMenu(jsonFile, containerId) {
  fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
      const menuContainer = document.getElementById(containerId);
      data.forEach((item) => {
        // Create menu item link element
        const menuItem = document.createElement("a");
        menuItem.textContent = item.name;
        menuItem.href = item.url;
        menuItem.classList.add("menu-item");

        // Append menu item to the container with a separator if needed
        menuContainer.appendChild(menuItem);
        menuContainer.insertAdjacentText("beforeend", " • "); // Add separator
      });
      // Remove the last separator
      if (menuContainer.lastChild) {
        menuContainer.lastChild.remove();
      }
    })
    .catch((error) => console.error("Error fetching menu:", error));
}

function loadFooter(jsonFile) {
  fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
      const footerContainer = document.getElementById("footer-container");

      // Intro text
      const introText = document.createElement("p");
      introText.textContent = data.intro_text;
      footerContainer.appendChild(introText);

      // Links
      const nav = document.createElement("nav");
      data.links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.target = "_blank";
        nav.appendChild(anchor);
        nav.insertAdjacentText("beforeend", " • ");
      });
      if (nav.lastChild) {
        // Remove the last separator
        nav.lastChild.remove();
      }
      footerContainer.appendChild(nav);

      // Footer note with certifications
      const footerNote = document.createElement("small");
      footerNote.innerHTML = data.footer_note + ", ";
      data.certifications.forEach((cert, index) => {
        const certLink = document.createElement("a");
        certLink.href = cert.url;
        certLink.textContent = cert.text;
        certLink.target = "_blank";
        footerNote.appendChild(certLink);
        if (index < data.certifications.length - 1) {
          footerNote.insertAdjacentText("beforeend", ", ");
        }
      });
      footerContainer.appendChild(footerNote);
    })
    .catch((error) => console.error("Error fetching footer:", error));
}

// Load the header menus
document.addEventListener("DOMContentLoaded", function () {
  loadMenu("./scripts/main_menu.json", "main-nav");
  loadMenu("./scripts/sub_menu.json", "sub-nav");
  loadFooter("./scripts/footer.json");
});
