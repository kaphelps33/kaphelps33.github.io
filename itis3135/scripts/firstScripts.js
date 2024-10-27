// Function to display the current date, day, and time
function displayDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  document.getElementById(
    "date-time"
  ).textContent = `Today is ${formattedTime} on ${formattedDate}`;
}

displayDateTime();

// Function to handle user info submission
function submitUserInfo(userName, userMood) {
  document.getElementById(
    "user-greeting"
  ).textContent = `Phelps Ventures welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
}

document.getElementById("user-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.getElementById("user-name").value;
  const userMood = document.getElementById("user-mood").value;
  submitUserInfo(userName, userMood);
});

// Function to check the polygon name based on user input
function checkPolygon(inputNumber) {
  // Convert the input to a number, round it to the nearest integer, and take the absolute value
  const roundedNumber = Math.round(Math.abs(Number(inputNumber)));

  // Determine the polygon name based on the rounded number
  const polygonNames = {
    1: "henagon / monogon",
    2: "digon / bigon",
    3: "trigon / triangle",
    4: "tetragon / quadrilateral",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon / septagon",
    8: "octagon",
    9: "enneagon / nonagon",
    10: "decagon",
  };

  // Get the polygon name or display a default message if the number is out of range
  const polygonName =
    polygonNames[roundedNumber] ||
    "a polygon with so many sides, the team did not feel bothered to put it in!";

  // Display the result in an alert
  alert(`The polygon with ${roundedNumber} sides is called a ${polygonName}.`);
}

document.getElementById("number-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let inputNumber = document.getElementById("favorite-number").value;
  checkPolygon(inputNumber);
});

// Functions
function calculateDerivative(x) {
  const h = 0.0001; // Small increment for approximation
  const derivative = (Math.pow(x + h, 2) - Math.pow(x, 2)) / h;
  return derivative;
}

document.getElementById("derivative").addEventListener("click", (event) => {
  alert(
    `The derivative of f(x) = x^2 at x = ${3} is ${calculateDerivative(3)}`
  );
});

function calculateIntegral(a, b) {
  const integral = Math.pow(b, 3) / 3 - Math.pow(a, 3) / 3;
  return integral;
}

document.getElementById("integral").addEventListener("click", (event) => {
  alert(`The integral of f(x) = x^2 from 0 to 1 is ${calculateIntegral(0, 1)}`);
});

function calculateFactorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

document.getElementById("factorial").addEventListener("click", (event) => {
  alert(`The factorial of 5 is ${calculateFactorial(5)}`);
});

function generatePrimes(limit) {
  const primes = [];
  const isPrime = Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * 2; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return primes;
}

document.getElementById("sieve").addEventListener("click", (event) => {
  alert(`Prime numbers up to 100: ${generatePrimes(100)}`);
});

function generateFibonacci(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n);
}

document.getElementById("fibonacci").addEventListener("click", (event) => {
  alert(`Fibonacci sequence up to 100 terms: ${generateFibonacci(100)}`);
});
