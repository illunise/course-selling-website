function countAnimation(targetNumber, elementId) {
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 250); // Adjust increment for faster counting
  var intervalTime = 20; // Time between each increment in milliseconds

  var interval = setInterval(function() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber; // Ensure the target number is reached exactly
    }
    document.getElementById(elementId).textContent = currentNumber.toLocaleString() + '+'; // Update the display with the current number
  }, intervalTime);

}

// Example usage
countAnimation(100000, 'count1'); // Start count animation for the first text
countAnimation(150, 'count2'); // Start count animation for the second text

const checkbox = document.querySelector("#hide_checkbox");
let gitLogo = document.getElementById("gitlogo");
let footerLogo = document.getElementById("footerLogo");
let topLogo = document.getElementById("topLogo");

hide_checkbox.addEventListener("click", () => {
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
    gitLogo.src = "images/github-dark.webp";
    footerLogo.src = "images/logo.webp";
    topLogo.src = "images/logo.webp";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    gitLogo.src = "images/github-light.webp";
    footerLogo.src = "images/logo_dark.webp";
    topLogo.src = "images/logo_dark.webp";
  }
});
