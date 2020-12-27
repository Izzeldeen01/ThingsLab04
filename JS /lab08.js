var thing; 

thing = prompt ('insert what you are looking for'); 

while (thing !=='cars' && thing !=='food' && thing !=='tools'){
    thing = prompt ('pleas inter what you need cars,food,tools'); 
}
var x=prompt ('how many item do you need?');

if (thing === 'cars'){
    
    for (var i=1;i<=x;i++){
    document.write(i+'<img src="download.jpg">'); }
}

if (thing === 'food'){
    for (var i=1;i<=x;i++){
    document.write(i+'<img src="food.jpg">'); }
}
if (thing === 'tools') {
    for (var i=1;i<=x;i++){
    document.write(i+'<img scr="tools.jpg">'); }
}
