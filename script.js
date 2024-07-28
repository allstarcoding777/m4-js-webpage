// Function to validate service quality input
function validateServiceQuality(serviceQuality) {
    const validQualities = ["great", "ok", "poor"];
    if (!validQualities.includes(serviceQuality.toLowerCase())) {
        alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
        return false; // Invalid quality, end the function
    }
    return true; // Valid quality
}

// Function to validate service amount input
function validateServiceAmount(amount) {
    if (amount < 5 || amount > 500) {
        alert("Invalid service amount entered. Please enter an amount between $5.00 and $500.00.");
        return false; // Invalid amount, end the function
    }
    return true; // Valid amount
}

// Function to calculate the tip amount
function calculateTip(amount, quality) {
    let tipPercentage;
    if (quality === "great") {
        tipPercentage = 0.20; // 20% tip for great service
    } else if (quality === "ok") {
        tipPercentage = 0.15; // 15% tip for ok service
    } else if (quality === "poor") {
        tipPercentage = 0.10; // 10% tip for poor service
    }
    return amount * tipPercentage; // Calculate and return the tip amount
}

// Main function to prompt user inputs and display the result
function main() {
    const serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
    if (!validateServiceAmount(serviceAmount)) return; // Validate service amount

    const serviceQuality = prompt("Enter the service quality (great, ok, or poor):").toLowerCase();
    if (!validateServiceQuality(serviceQuality)) return; // Validate service quality

    const tip = calculateTip(serviceAmount, serviceQuality); // Calculate the tip
    alert(`For a service amount of $${serviceAmount.toFixed(2)}, the recommended tip for ${serviceQuality} service is $${tip.toFixed(2)}.`); // Display the result
}

// Call the main function to start the program
main();