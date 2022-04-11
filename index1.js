var randomNumber1=Math.floor (Math.random()*6)+1;
var randomNumber2=Math.floor (Math.random()*6)+1;


imageSrc= "images/dice"+randomNumber1+".png";
var diceFace1= document.querySelectorAll("img")[0];
diceFace1.setAttribute("src",imageSrc);
var randomNumber1=Math.floor (Math.random()*6)+1;

imageSrc= "images/dice"+randomNumber2+".png";
var diceFace2= document.querySelectorAll("img")[1];
diceFace2.setAttribute("src",imageSrc);