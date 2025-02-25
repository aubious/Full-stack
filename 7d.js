let output = document.getElementById("output");
// Function to calculate absolute value
function absValue() {
let num = 10;
output.textContent = "Absolute value of " + num + " is: " +
Math.abs(num);
}
// Function to calculate ceiling value
function ceilValue() {
let num = 10.5;
output.textContent = "Ceiling value of " + num + " is: " +
Math.ceil(num);
}
// Function to calculate floor value
function floorValue() {
let num = 10.5;
output.textContent = "Floor value of " + num + " is: " +
Math.floor(num);
}
// Function to calculate maximum value
function maxValue() {
let num1 = 10;
let num2 = 20;
output.textContent = "Maximum value of " + num1 + " and " +
num2 + " is: " + Math.max(num1, num2);
}
// Function to calculate minimum value
function minValue() {
let num1 = 10;
let num2 = 20;
output.textContent = "Minimum value of " + num1 + " and " +
num2 + " is: " + Math.min(num1, num2);
}
// Function to calculate power value
function powValue() {
let base = 2;
let exponent = 3;
output.textContent = "Power value of " + base + " raised to " +
exponent + " is: " + Math.pow(base, exponent);
}
// Function to generate random value
function randomValue() {
output.textContent = "Random value is: " + Math.random();
}
// Function to calculate round value
function roundValue() {
let num = 10.5;
output.textContent = "Round value of " + num + " is: " +
Math.round(num);
}
// Function to calculate square root value
function sqrtValue() {
let num = 16;
output.textContent = "Square root value of " + num + " is: " +
Math.sqrt(num);
}