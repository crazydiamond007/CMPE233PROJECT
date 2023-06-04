// Get all the buttons
const buttons = document.querySelectorAll("button");

// Create an empty array to store the product prices
const prices = [];

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const priceElement = button.previousElementSibling;
    const price = parseFloat(priceElement.textContent.replace("£", ""));
    prices.push(price);
  });
});

// Calculate the total cost and apply discount if necessary
function calculateTotalCost() {
  let total = 0;

  // Sum up all the prices
  prices.forEach((price) => {
    total += price;
  });

  // Apply discount if the total is £1000 or more
  if (total >= 1000) {
    total *= 0.9; // 10% discount
  }

  return total;
}

// Show the total cost using a window prompt
function showTotalCost() {
  const total = calculateTotalCost();
  window.prompt("Total Cost: £" + total.toFixed(2));
}

// Add event listener to a button that triggers the total cost calculation
const totalButton = document.createElement("button");
totalButton.textContent = "Calculate Total Cost";
totalButton.addEventListener("click", showTotalCost);

// Append the total button to the body of the HTML document
document.body.appendChild(totalButton);
