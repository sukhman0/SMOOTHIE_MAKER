// Script.js

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements and attach event listeners
  const orderButton = document.getElementById("orderButton");
  orderButton.addEventListener("click", handleOrder);

  const sweetnessInput = document.getElementById("sweetness");
  const sweetnessLevel = document.getElementById("sweetnessLevel");
  sweetnessInput.addEventListener("input", function () {
    sweetnessLevel.innerText = sweetnessInput.value;
  });

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", handleReset);
});

// Function to handle the "Order" button click event
function handleOrder() {
  // Get user selections from the form
  const fruit = document.getElementById("fruit").value;
  const base = document.getElementById("base").value;
  const toppings = getSelectedToppings();
  const sweetness = document.getElementById("sweetness").value;

  // Create a new Smoothie object with the user selections
  const smoothie = new Smoothie(fruit, base, toppings, sweetness);
  // Display the smoothie description on the page
  displaySmoothieDescription(smoothie);
}

// Function to get the selected toppings from the checkboxes
function getSelectedToppings() {
  const checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
  const toppings = Array.from(checkboxes).map((checkbox) => checkbox.value);
  return toppings;
}

// Function to display the smoothie description on the page
function displaySmoothieDescription(smoothie) {
  const smoothieDescription = document.getElementById("smoothieDescription");
  // Populate the smoothie description with the selected options
  smoothieDescription.innerHTML = `
  <h4>Your Smoothie is Ready:</h4>
  <p><span>Fruit:</span> ${smoothie.fruit}</p>
  <p><span>Base:</span> ${smoothie.base}</p>
  <p><span>Toppings:</span> ${smoothie.toppings.join(", ")}</p>
  <p><span>Sweetness Level:</span> ${smoothie.sweetness}</p>
  `;
}

// Smoothie class representing a smoothie object
class Smoothie {
  constructor(fruit, base, toppings, sweetness) {
    this.fruit = fruit;
    this.base = base;
    this.toppings = toppings;
    this.sweetness = sweetness;
  }
}

// Function to handle the "Reset Form" button click event
function handleReset() {
  // Reset the form elements to their initial values
  const form = document.getElementById("smoothieForm");
  form.reset();
  // Reset the sweetness level display to its initial value
  document.getElementById("sweetnessLevel").innerText = document.getElementById("sweetness").value;
  // Clear the smoothie description display
  smoothieDescription.innerHTML = '';
}
