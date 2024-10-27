function showSection(id) {
  document.querySelectorAll("main").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
