
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


//updating the size label
function updateSizeValue(value){
    sizeLabel.innerHTML =`${value} x ${value}`;
}

// grid size manipulation
gridSizeSlider.oninput = (e) => {
     updateSizeValue(e.target.value);
};

//adjust the grid size based on user input
function changeGridSize(gridSize = 16){
 
    
    //creating grid-items
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