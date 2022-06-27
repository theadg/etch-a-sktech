
const container = document.getElementById('gridContainer');
const sizeLabel = document.getElementById("sizeLabel");
const gridSizeSlider =  document.getElementById("gridSizeSlider");
const gridContainer = document.getElementById("gridContainer");
const color = document.getElementById("colorPicker");
const clearBtn = document.getElementById("clearBtn");
const eraseBtn = document.getElementById("eraseBtn");
const colorMode = document.querySelector('#colorBtn');
const bgColorPicker = document.getElementById("bgColorPicker");
const randomRgb = document.getElementById('randomRgb');
let currentColor = color.value;
let coloringMode = 'color'; //default to color for user to be able to sketch instantly
let activeBtn = '';




//updating the size label
function updateSizeValue(value){
    sizeLabel.innerHTML =`${value} x ${value}`;
}

// grid size manipulation
gridSizeSlider.oninput = (e) => {
     updateSizeValue(e.target.value);
};


changeGridSize();  //calling the function for it to run

//adjust the grid size based on user input
function changeGridSize(gridSize = 16){

    createGrid(gridSize);

    const gridItemCount = gridContainer.children.length;
    console.log(gridItemCount);

    //changing of rows and columns css
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
}


//removing all child elements of the grid container
function resetGrid(){

    while (gridContainer.firstChild){
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }

  //whenever the size slider changes, the functions inside
gridSizeSlider.onchange = (e) =>{
    const gridSize = (e.target.value);
    resetGrid(); 
    changeGridSize(gridSize);
};

//whenever color is selected, the current color of the color picker
//is used to sketch
colorMode.onclick = () => {
    currentColor = color.value;
   

    addActive(colorMode);
    coloringMode = 'color';
    // removeActive();
};
    
//getting the color of the colorPicker
color.oninput = (e) => {
    currentColor = e.target.value;
};

//changes color mode to eraser
eraseBtn.onclick = () => {

    coloringMode = 'eraser';
    activeBtn = 'erase';

    // removeActive();
    addActive(eraseBtn);
    
};

//sets the color to use in the canvas
function changeColorMain(e){
    if (e.type === 'mouseover' && !mouseDown) return
    else if (coloringMode === 'color')
    e.target.style.backgroundColor = `${currentColor}`;
    else if (coloringMode === 'eraser')
    e.target.style.backgroundColor = `${bgColorPicker.value }`;
    else if (coloringMode === 'rainbow')
    e.target.style.backgroundColor = `rgb(${randomRgbColor()})`;
}

//variables set to be used in mouse events
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


//sets the color of the container

gridContainer.style.backgroundColor = bgColorPicker.value;
const bgColor = bgColorPicker.value;
bgColorPicker.oninput = () => {
    gridContainer.style.backgroundColor = bgColorPicker.value


 const containerItems = document.querySelectorAll('#gridItem');
     containerItems.forEach((item)=> {
        item.style.backgroundColor =  `${bgColorPicker.value}`;

    });
};


bgColorPicker.onchange = () => {
    gridContainer.style.backgroundColor = bgColorPicker.value;

    const containerItems = document.querySelectorAll('#gridItem');
    containerItems.forEach((item)=> {
        item.style.backgroundColor =  `${bgColorPicker.value}`;

    });
};



//changes coloring mode to rainbow
randomRgb.onclick = () => {
    coloringMode = 'rainbow';
    activeBtn = 'random';

    // removeActive();
    addActive(randomRgb);
  
    };


//clears the grid by coloring them to default color
clearBtn.onclick = () => {
    // activeBtn = 'clear';
    // addActive(clearBtn);
    // removeActive();
 const containerItems = document.querySelectorAll('#gridItem');
    
 containerItems.forEach((item)=> {
        item.style.backgroundColor =  `${bgColorPicker.value}`;

    });
};

//returns a random rgb color
function randomRgbColor(){
    let rgbRed = Math.floor(Math.random()*(255+1));
    let rgbGreen = Math.floor(Math.random()*(255+1));
    let rgbBlue = Math.floor(Math.random()*(255+1));    
    return [rgbRed, rgbGreen, rgbBlue];
    // const randomColor =[rgbRed, rgbGreen, rgbBlue];
    // return randomColor;
}

function createGrid(gridSize = 16){
    for (let i = 1; i <= (gridSize*gridSize); i++){

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute('id', 'gridItem');
        gridItem.addEventListener('mouseover', changeColorMain);
        gridItem.addEventListener('mousedown', changeColorMain);

        gridContainer.appendChild(gridItem);
    }
    
}


//
function addActive(btn){
    removeActive();
    btn.classList.add('active');
}

const buttons = document.querySelectorAll("input[type = button]");
function removeActive(){
    buttons.forEach((button) => {
        button.classList.remove('active');
        })
}