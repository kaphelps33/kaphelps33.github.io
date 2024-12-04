async function loadComponent(file, id) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

// Load the header and footer
loadComponent("./components/header.html", "header");
loadComponent("./components/footer.html", "footer");
