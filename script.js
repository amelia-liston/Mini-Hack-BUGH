// Get a reference to the dropdown element
var dropdown = document.getElementById("dropdown");

// Get a reference to the span element where we'll display the selected value
var selectedFruit = document.getElementById("selectedFruit");

// Add an event listener to the dropdown to capture the selected value
dropdown.addEventListener("change", function() {
    selectedFruit.textContent = dropdown.value;
});