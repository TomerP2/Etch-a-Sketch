const main_container = document.getElementById('main-container');
let length = 50
createGrid(length);
const grid_elements = document.querySelectorAll('.grid-element');
addHoverEventListener();
//Create grid of divs:



function createGrid(length) {
    for (let i = 1; i <= (length ** 2); i++) {
        const div = document.createElement('div');
        div.style.height = `${100/length}vh`;
        div.style.width = `${100/length}vw`;
        div.classList.add('grid-element')
        main_container.appendChild(div);
    }
}

function addHoverEventListener() {
    grid_elements.forEach((element) => {
        element.addEventListener('mouseover', function() {
            element.classList.add('activated')
            console.log('activated')
        })
    })
}