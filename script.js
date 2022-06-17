//Checking if js is linked properly
console.log("Hello world");



const container = document.getElementById('gridContainer');
const containerItems = document.querySelectorAll('#gridItem');


containerItems.forEach((item)=> {

    item.addEventListener('mouseover', function(event) {

         event.target.style.backgroundColor = "pink";
         console.log(event);
    });
});

// Things to do:
//      1. Make the canvas adjustable
//      2. Add color wheel - make a variable
//      3. Add eraser
//      4. Add clear