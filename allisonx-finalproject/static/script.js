//Testing JavaScript functionality
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

//Create a time-based greeting on the homepage
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

//Create a dynamic footer based on the year
let year = new Date().getFullYear();
function addYear() {
    let temp = document.getElementById("copyYear");
    if (temp) {
        temp.innerHTML = year; //change the inner html of the footer to have the year
    }
}

addYear();

// Sets the 'active' class on the navigation link that matches the current page URL.
function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
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
// Calculate total price
function calculateTotal() {
    let qty = parseInt(document.getElementById("quantity").value) || 0;
    let type = document.getElementById("ticketType").value;

    let prices = {
        general: 18,
        student: 10,
        member: 15
    };

    return qty * (prices[type] || 0);
}

// Show alert on submit
function submitPurchase(event) {
    //Prevent screen from reloading before calculations are finished
    event.preventDefault(); 

    //Bring in the values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const date = document.getElementById("selectedDate").value.trim();
    const zipField = document.getElementById("zip");
    const zip = zipField ? zipField.value.trim() : "";

    //Make sure the fields are not empty
    if (!name || !email || !quantity || !date) {
        alert("Please fill out all required fields before submitting.");
        return;
    }

    //Make sure the email format is valid
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (example: name@example.com).");
        return;
    }
    
    //Make sure the zip code is 5 digits, if there is one
    if (zip && !/^\d{5}$/.test(zip)) {
        alert("Zip code must be 5 digits.");
        return;
    }
    
    //Call the calculate total function
    const total = calculateTotal();
    alert("Your total is $" + total + "\nYour payment is successful.");
}

//Toggle the menu to show the hamburger based on the user's clicks
function toggleMenu() {
    let nav = document.getElementById("mainNav");
    nav.classList.toggle("active");
    let burger = document.querySelector(".hamburger");
    burger.classList.toggle("hidden");
}

//Add the map API onto the about page
if (document.getElementById("map")) {
    var map = L.map('map').setView([29.703749, -95.553069], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([29.703749, -95.553069])
      .addTo(map)
      .bindPopup("9889 Bellaire Blvd, Houston, TX 77036") //Set the museum location to Houston Chinatown
      .openPopup();
}

//The donate button calls this function to stimulate a donation page
function donate() {
    alert("Redirecting to payment system.");
}

//Slide fades in and out on the about page
$(document).ready(function() {
  let slideIndex = 0;
  const slides = $(".slide");
  const dots = $(".dot");

  function showSlide(index) {
    slides.hide().eq(index).fadeIn(600);
    dots.removeClass("active").eq(index).addClass("active");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; //Loop back around
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; //Loop back around
    showSlide(slideIndex);
  }
  //Add dots on the bottom to show the user which slide they are on
  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);
  $(".dot").click(function() {
    slideIndex = $(this).data("index");
    showSlide(slideIndex);
  });
  //The slide will automatically change every 4 seconds
  setInterval(nextSlide, 4000);

  // Initialize
  showSlide(slideIndex);
});
