// Method 1: Using prompt() function
let name = prompt("What is your name?");
document.getElementById("output").innerHTML += "Hello, " + name + "!<br>";

// Method 2: Using confirm() function
let response = confirm("Are you sure?");
if (response) {
    document.getElementById("output").innerHTML += "You clicked OK!<br>";
} else {
    document.getElementById("output").innerHTML += "You clicked Cancel!<br>";
}

// Method 3: Using HTML form and JavaScript
let form = document.getElementById("myForm");
let inputField = document.getElementById("myInput");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let inputValue = inputField.value;
    document.getElementById("output").innerHTML += "You entered: " + inputValue + "<br>";
});