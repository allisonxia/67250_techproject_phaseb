var x = 5
var y = 7
var z = x + y
console.log(z)

A = "Hello "
B = "world!"
var C = A + B
console.log(C)

function sumnPrint(x1, x2) {
    console.log(x1 + x2)
}

sumnPrint(x,y)
sumnPrint(A,B)

if (C.length > z) {
    console.log(C)
} 
if (C.length < z) {
    console.log(z)
}
else {  
    console.log("good job!")
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

/*
function findTheBanana(arr) {
    for(x=0; x<arr.length; x++) {
        if(arr[x] == "Banana") {
            alert("Banana is found")
        }
    }
}
*/

/*
function findTheBanana(arr) {
    arr.array.forEach(element => {
        if(element == "Banana") {
            alert("Banana is found")
        }
    });
}

findTheBanana(L1)
findTheBanana(L2)
*/

var now = new Date()
let hour = now.getHours()

function greeting(h) {
    let heading = document.getElementById("greeting");
    if (heading) {
        if(h < 5 || h >= 20){
            heading.innerHTML = "Good night, Welcome to MonoMuse";
        }
        else if(h < 12){
            heading.innerHTML = "Good morning, Welcome to MonoMuse";
        }
        else if(h < 18){
            heading.innerHTML = "Good afternoon, Welcome to MonoMuse";
        }
        else{
            heading.innerHTML = "Good evening, Welcome to MonoMuse";
        }
    }
}

greeting(hour)

let year = new Date().getFullYear();
function addYear() {
    let temp = document.getElementById("copyYear");
    if (temp) {
        temp.innerHTML = year;
    }
}

addYear();

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

// When the "Read Less" button is clicked
$("#readLessButton").click(function(){ 
    $("#readMore").hide(); // Hide the long introduction text
    $("#readLessButton").hide();  // Hide the "Read Less" button itself
    $("#readMoreButton").show();  // Show the "Read More" button  

});
  
// When the "Read More" button is clicked
$("#readMoreButton").click(function(){
    $("#readMore").show();  // Show the long introduction text
    $("#readLessButton").show();   // Show the "Read Less" button
    $("#readMoreButton").hide();   // Hide the "Read More" button  
});

// Reveal the purchase form and fill in the selected date
function showPurchaseForm(date) {
    let form = document.getElementById("ticketForm");
    let dateField = document.getElementById("selectedDate");

    form.style.display = "block";
    dateField.value = date;
}

// Show alert on submit
function submitPurchase() {
    alert("Redirecting to payment system.");
}