var thing;

 thing = prompt('pleas inter what you are searching for');


 while ((thing !=='cars') && (thing !=='food') && (thing !=='tools')) {
console.log(thing)
    thing = prompt ('pleas state what you need (cars,food,tools)');
 }

 var x = prompt ('how many items do you need'); 

 if (thing=== 'cars'){
     for (var i=1;i<=x ;i++){
         document.write(i + '<img src="download.jpg">'); 
  
     }
 }
 if (thing === 'food'){
     for (var i=1;i<=x;i++){
         document.write(i+ '<img src="food.jpg">');
     }
 }
 if (thing==='tools'){
     for (var i=1;i<=x;i++){
         document.write(i + '<img src="tools.jpg">');
     }
 }
