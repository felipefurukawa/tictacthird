let playerText = document.getElementById('playerText')
let boxes = Array.from(document.getElementsByClassName('dropBox'))
let crosses = Array.from(document.getElementsByClassName('cross'))
let circle = Array.from(document.getElementsByClassName('circle'))

// console.log(boxes)
// console.log(crosses)
// console.log(circle)

let currentPlayer = ''
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('droped', drop))
}


function allowDrop(event){
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData("text",event.target.id);
}

function drop(event){
    event.preventDefault();
    const id = event.target.id

    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function reset(event){
    location.reload();
}



startGame()