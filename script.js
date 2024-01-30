
function player(name, score) {
    this.name = name;
    this.score = score;

}

const player1 = new player("John", 13)


function gameBoard () {
    const array = []
    const rows = 6;
    const columns = 7;
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
          array[i].push(Cell())
        }
    }
    function Cell() {
        return(0)
    }
    console.log(array)
}

gameBoard()


function game() {

    
}

