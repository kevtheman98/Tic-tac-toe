
function player(name, score) {
    this.name = name;
    this.score = score;

}

const player1 = new player("John", 13)


function gameBoard () {
    const container = document.querySelector("#container")
    const array = [
        ["", "", ""],
        ["", "", ""], 
        ["", "", ""],
    ]
    for(let i = 0; i < array.length; i++) {
        const element = array[i]
        for(let i = 1; i < element.length; i++) {
            const make = document.createElement('button')
            make.classList = "cell"
            container.appendChild(make)
            make.addEventListener("click", () => {
                
              
            })
        }
    }
    
    return(array)
}

console.log(gameBoard())


function game() {
    const array = gameBoard();
    
    function checkWinner() {
        let result = false

        /*For rows*/
        if(array[0][0] != "" && array[0][0] == array[0][1] && array[0][0] == array[0][2]) {
            result = true
        } else if (array[1][0] != "" && array[1][0] == array[1][1] && array[1][0] == array[1][2]){
            result = true
        } else if (array[2][0] != "" && array[2][0] == array[2][1] && array[2][0] == array[2][2]) {
            result = true
        }
        /* For columns*/
        if(array[0][0] != "" && array[0][0] == array [1][0] && array[0][0] == array[2][0]) {
            result = true
        } else if (array[0][1] != "" && array[0][1] == array [1][1] && array[0][1] == array[2][1]) {
            result = true
        } else if (array[0][2] != "" && array[0][2] == array [1][1] && array[0][2] == array[2][1]) {
            result = true
        }


        return(result)
    }
    const player = 0
    return function switchPlayers() {
        if(player == 0) {
            document.querySelector("#cell").innerHTML = "X"
            player = 1
        } else {
            document.querySelector("#cell").innerHTML = "O"
            player = 0
        }
    }
    
}
game()



