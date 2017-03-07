if(window.location.href === "https://athdot.github.io/ai/"){
//Subjects
//Greets
var greet1 = "Hello"
var greet2 = "Hi"
var greet3 = "'Sup!"
var randgreetselector = Math.floor((Math.random() * 3) + 1);
if(randgreetselector == 1){
 var greet = greet1       
}
if(randgreetselector == 2){
 var greet = greet2      
}
if(randgreetselector == 3){
 var greet = greet3    
}
//End Greets
//goodbyes
var bye1 = "'Bye"
var bye2 = "Goodbye"
var bye3 = "See ya later!"
var randbyeselector = Math.floor((Math.random() * 3) + 1);
if(randbyeselector == 1){
 var bye = bye1       
}
if(randbyeselector == 2){
 var bye = bye2       
}
if(randbyeselector == 3){
 var bye = bye3    
}
//End Goodbyes

//End subjects
//Word Deffinitions
var defHi = "greet"
var defHello = "greet"
var defWassup = "greet"

//End Deffinitions
}else{
 window.open("https://athdot.github.io/ai/copyright.html")
}
