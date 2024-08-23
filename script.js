// Function to change the color of the box with a loading indicator

function changeBoxColor(newColor, callback) {
    //Select the box element
    const box = document.querySelector('.box');
    const loading=document.getElementById('loading');

    //show loading indicator
    loading.classList.remove('hidden');


    // Set a timeout to change the color after 1 second
    setTimeout(() => {

        //update the box color
        box.classList=`w-40 h-40 transition-all duration-500 box ${newColor}`;

        //Hide loading indicator
        loading.classList.add('hidden');
        callback();
    }, 1000);
}


// Callback function to alert the user after the color change

function showAlert(color){
    alert(`The color has been changed to ${color}!`);
}

//Function to reset the box color to its original state

function resetBoxColor(){
    const box = document.querySelector('.box');
    box.classList='w-40 h-40 bg-blue-500 transition-all duration-500 box';
    alert('The color has been reset to its original state "blue"')

}


//Function to adjust the size of the box
function adjustBoxSize(increase){
    const box = document.querySelector('.box');
    const currentSize = parseInt(box.style.width || '160px', 10);
    const newSize = increase ? currentSize + 20 : currentSize - 20;
    box.style.width= `${newSize}px`;
    box.style.height= `${newSize}px`; 
}


//Function to toggle the visibility of the box
function toggleBoxVisibility(){
    const box = document.querySelector('.box');
    box.classList.toggle('hidden');
}



//Function to apply a custom color to the box
function applyCustomColor(){
    const box = document.querySelector('.box');
    const customColor = document.getElementById('customColorInput').value;
    box.style.backgroundColor=customColor;
    alert(`The box color has been changed to ${customColor}!`);

}


//select the button element 

const redButton = document.getElementById('changeToRed');
const blueButton = document.getElementById('changeToBlue');
const greenButton = document.getElementById('changeToGreen');
const resetButton = document.getElementById('resetColor');
const increaseSizeButton = document.getElementById('increaseSize');
const decreaseSizeButton = document.getElementById('decreaseSize');
const toggleVisibilityButton = document.getElementById('toggleVisibility');
const applyCustomColorButton = document.getElementById('applyCustomColor');

// Add an event listeners to the buttons
redButton.addEventListener('click',()=>{
    changeBoxColor('bg-red-500', ()=>showAlert('red'));
} );

greenButton.addEventListener('click',()=>{
    changeBoxColor('bg-green-500', ()=>showAlert('green'));
} );

blueButton.addEventListener('click',()=>{
    changeBoxColor('bg-blue-500', ()=>showAlert('blue'));
} );

resetButton.addEventListener('click', resetBoxColor);

increaseSizeButton.addEventListener('click',() => adjustBoxSize(true));
decreaseSizeButton.addEventListener('click', () => adjustBoxSize(false));

toggleVisibilityButton.addEventListener('click', toggleBoxVisibility);
applyCustomColorButton.addEventListener('click', applyCustomColor);