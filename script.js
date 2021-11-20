const main_container = document.getElementById('main-container');
const reset_button = document.getElementById('reset')
let default_length = 50
resetGrid(default_length)
addResetEventListener();

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
    window.grid_elements.forEach((element) => {
        element.addEventListener('mouseover', function() {
            element.classList.add('activated');

            let randomColor = random_rgba();
            element.style.backgroundColor = randomColor;
        })
    })
}

function addResetEventListener() {
    reset_button.addEventListener('click', function() {
        let length = undefined;
        while (true) {
            if (length === undefined) {
                length = resetPrompt("What grid size would you like? Enter a number between 1 and 100:");
            }
            if (length === null) {
                return;
            }
            if (isNaN(length)) {
                length = resetPrompt('Not a number. Please enter a number between 1 and 100:');
                continue;
            }
            if (length < 1 || length > 100) {
                length = resetPrompt('Number too low or too high. Please enter a number between 1 and 100:');
                continue;
            }
            break;
        }
        resetGrid(length)
    })
}

function resetGrid(length) {
    if (window.grid_elements !== undefined) {
        window.grid_elements.forEach((element) => {
            main_container.removeChild(element);
        });
    }
    createGrid(length);
    window.grid_elements = document.querySelectorAll('.grid-element');
    addHoverEventListener()
}

function resetPrompt(str) {
    let output = prompt(str);
    if (output === null) {
        return null;
    } else {
        return parseInt(output);
    }
}

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}