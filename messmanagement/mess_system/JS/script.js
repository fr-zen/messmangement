// Example: Carousel Navigation (Can be extended for interactivity)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully!");
  // Add your dynamic carousel logic or animations here.
});
function toggleMenu(id) {
  const menu = document.getElementById(id);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
