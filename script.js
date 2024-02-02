
function player(name, score) {
    this.name = name;
    this.score = score;

}

const player1 = new player("John", 13)

function gameBoard () {
    const array = [
        ["", "", ""],
        ["", "", ""], 
        ["", "", ""],
    ]
    return(array)
}






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

    function render() {
        let num = 0
        for(let i = 0; i < array.length; i++) {
            const element = array[i]
            for(let i = 0; i < element.length; i++) {
                const cell = document.createElement('button')
                cell.classList = "cell"
                cell.id = "button" + num++
                container.appendChild(cell)
                cell.addEventListener("click", () => {
                    if(player == 0) {
                        cell.innerHTML = "X"
                        player = 1
                        
                    } else {
                        cell.innerHTML = "0"
                        player = 0
                        
                    }
                    
                          
                })
                
            }
        }
    }

    

    return {checkWinner, render}
}
const childFunctions = game()

childFunctions.checkWinner();
childFunctions.render()


