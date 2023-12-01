document.addEventListener("DOMContentLoaded", () =>{
let body = document.querySelector("body");
 body.style.width = "100%"; 
 body.style.height = "25%"; 
 body.style.backgroundColor = "blue";  
  let firstLabel = document.getElementById("label1").innerHTML =  prompt("Enter your name:");  
  let firstLabel1 = document.getElementById("label2");
  let textInput1 = document.getElementById("input1");  
  textInput1.innerHTML = 0;
  let textInput2 = document.getElementById("input2");   
    textInput2.innerHTML = 0;
 let card1 = document.getElementById("circle1"); 
  let card2 = document.getElementById("circle2");
   let test = document.getElementById("button1"); 
   let play = Math.floor(Math.random() * 4);  
  for(let i = 0; i < play; i++){
test.onclick = cardsMove;   
  }
if(play == 3){ 
  prompt("Enter your name:"); 
}
 function cardsMove(){ 
 let image = document.createElement("img");
 image.src = "For work.jfif";  
  card1.appendChild(image);
 let image1 = document.createElement("img");
 image1.src = "For work(2).jfif"; 
 card2.appendChild(image1);
 let image2 = document.createElement("img");
 image2.src = "For work(3).jfif"; 
  let image3 = document.createElement("img");
 image3.src = "For work(4).webp";
  let cards = [ image, image1, image2, image3];  
 let number = Math.floor(Math.random() * 4);
if(number == 1){ 
if(cards == image){
 let temp = image; 
body.append(temp); 
}else{ 
let temp = image2; 
card1.append(temp);  
}
if(cards == image1){
 let temp = image1; 
body.append(temp); 
}else{ 
let temp = image3; 
card2.append(temp);  
}
 } 
 let number1 = Math.floor(Math.random() * 22);
if(number1 >= 10){   
let sum = 0;
sum += number1;
textInput1.innerHTML = sum;
alert ("You are win:");
}if(number1 <= 10){ 
 let sum = 0;
sum += number1;
textInput2.innerHTML = sum;
 alert ("You are lose:"); 
 } 
 if(number1 == 22) {  
 alert("Stop");
 }
 }
 }
);

 

