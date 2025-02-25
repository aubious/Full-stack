// Method 1: Using alert() function
alert("Hello, World!");

// Method 2: Using document.write() function
document.write("Hello, World! <br>"); // Only works before page loads

// Method 3: Using console.log() function
console.log("Hello, World!");

// Method 4: Using innerHTML property (Better than document.write after page load)
document.getElementById("innerHTMLOutput").innerHTML = "Hello, World!";

// Method 5: Using prompt() function
let name = prompt("What is your name?");
document.getElementById("promptOutput").innerHTML = "Hello, " + name + "!";

// Method 6: Using confirm() function
let response = confirm("Are you sure?");
if (response) {
    document.getElementById("confirmOutput").innerHTML = "You clicked OK!";
} else {
    document.getElementById("confirmOutput").innerHTML = "You clicked Cancel!";
}