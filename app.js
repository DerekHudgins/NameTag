const nameInput = document.getElementById ('name-input');
const changeBtn = document.getElementById ('change-btn');
const displayName = document.getElementById ('display-name');

changeBtn.addEventListener('click', () =>{

    displayName.textContent = nameInput.value;

});

const blue = document.getElementById ('blue');
const green = document.getElementById('green');


document.getElementById('blue').addEventListener('click', changeColor);

function changeColor() {
    this.style.backgroundColor = "blue";
    return false;
}

document.getElementById('green').addEventListener('click', changeColor);

function changeColorGreen() {
    this.style.backgroundColor = " green";
    return false;
}