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
