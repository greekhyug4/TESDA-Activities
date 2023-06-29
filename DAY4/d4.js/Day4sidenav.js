// Get the sidenav links and content div
const sidenavLinks = document.querySelectorAll(".sidenav a");
const contentDiv = document.querySelector(".content");

// Add click event listeners to sidenav links
sidenavLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior

    // Remove active class from all links
    sidenavLinks.forEach(link => link.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");

    // Set the content based on the clicked link
    contentDiv.innerHTML = getContent(link.innerText);
  });
});

// Function to get the content based on the clicked link
function getContent(linkText) {
  let content = "";
  switch (linkText) {
    case "Espresso":
      content += "<h2>Espresso</h2>";
      content += "<p>Espresso is a concentrated coffee beverage brewed by forcing hot water under high pressure through finely ground coffee.</p>";
      break;
    case "Cappuccino":
      content += "<h2>Cappuccino</h2>";
      content += "<p>Cappuccino is an espresso-based coffee drink that originated in Italy. It is typically composed of equal parts espresso, steamed milk, and milk foam.</p>";
      break;
    case "Latte":
      content += "<h2>Latte</h2>";
      content += "<p>Latte is a coffee drink made with espresso and steamed milk. It is typically topped with a small amount of milk foam.</p>";
      break;
    case "Mocha":
      content += "<h2>Mocha</h2>";
      content += "<p>Mocha is a chocolate-flavored variant of a latte, typically made with espresso, chocolate syrup, steamed milk, and topped with whipped cream.</p>";
      break;
  }
  return content;
}

// Set the initial content
contentDiv.innerHTML = getContent("Espresso");
