const square = document.querySelector('.container');
const btn = document.querySelector('.size');
const erase = document.querySelector('.erase');
// random number for the background color of the grid squares


// adding 16 divs
function createGrid(size){
    if (size > 100) {
        alert("Please choose less than 100");
        size = 100;
    }
    for (let i = 0; i <= size*size; i++) {
        const div = document.createElement('div');
        div.className = 'div';
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bckgrndColor = "rgb(" + x + "," + y + "," + z + ")";
    
         square.appendChild(div);
         // hover to change the color of the squares
         div.addEventListener('mouseover', () =>div.style.backgroundColor = bckgrndColor)
    
    }
}


//changing the grid size

btn.addEventListener('click', function(){
    let newSize = prompt("What is the size of the grid that you want it to be?")
    square.innerHTML = '';
    
    createGrid(newSize);
})
// clearing the grid
erase.addEventListener('click', ()=> {
    square.innerHTML= " "
    createGrid(16)
});
createGrid(16);
