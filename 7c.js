let myArray = [];
let output = document.getElementById("output");
// Function to create an array
function createArray() {
myArray = [1, 2, 3, 4, 5];
output.textContent = "Array created: " + myArray;
}
// Function to push an element to the array
function pushElement() {
myArray.push(6);
output.textContent = "Element pushed: " + myArray;
}
// Function to pop an element from the array
function popElement() {
myArray.pop();
output.textContent = "Element popped: " + myArray;
}
// Function to shift an element from the array
function shiftElement() {
myArray.shift();
output.textContent = "Element shifted: " + myArray;
}
// Function to unshift an element to the array
function unshiftElement() {
myArray.unshift(0);
output.textContent = "Element unshifted: " + myArray;
}
// Function to splice an element from the array
function spliceElement() {
myArray.splice(2, 1);
output.textContent = "Element spliced: " + myArray;
}
// Function to slice the array
function sliceArray() {
let slicedArray = myArray.slice(1, 3);
output.textContent = "Array sliced: " + slicedArray;
}
// Function to concat the array
function concatArray() {
let concatArray = myArray.concat([6, 7, 8]);
output.textContent = "Array concatenated: " + concatArray;
}
// Function to join the array
function joinArray() {
let joinedArray = myArray.join("-");
output.textContent = "Array joined: " + joinedArray;
}
// Function to reverse the array
function reverseArray() {
myArray.reverse();
output.textContent = "Array reversed: " + myArray;
}
// Function to sort the array
function sortArray() {
myArray.sort();
output.textContent = "Array sorted: " + myArray;
}