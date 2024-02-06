
function player(name, score) {
    this.name = name;
    this.score = score;

}


const array = [
    ["", "", ""],
    ["", "", ""], 
    ["", "", ""],
]

function game() {

    function checkWinner() {
        let result = false

        /*For rows*/
        for(let i = 0; i < 3; i++) {
            if(array[0][i] != "" && array[1][i] == array[0][i] && array[2][i] == array[0][i]){
                result = true
            }
        }
        /* For columns*/
        for(let i = 0; i < 3; i++) {
            if(array[i][0] != "" && array[i][1] == array[i][0] && array[i][2] == array[i][0]){
                result = true
            }
        }
        /* For diagnoals*/
        if(array[0][0] != "" && array[0][0] == array[1][1] && array[0][0] == array[2][2]) {
            result = true
        } else if (array[2][0] != "" && array[2][0] == array[1][1] && array[2][0] == array[0][2]) {
            result = true
        }
        console.log(result)
        return(result)
        
    }

    function render() {
        let num = 0
        for(let i = 0; i < array.length; i++) {
            const element = array[i]
            for(let j = 0; j < element.length; j++) {
                const cell = document.createElement('button')
                cell.classList = "cell"
                cell.id = num++
                container.appendChild(cell)
                
                
            }
        }
    }

    function marker() {
        const cell = document.querySelectorAll(".cell")
        console.log(cell)
        function link(event) {
            const buttonIndex = parseInt(event.target.id);
            if (buttonIndex < 3) {
                array[0][buttonIndex] = event.target.innerHTML;
            } else if (3 <= buttonIndex && buttonIndex < 6) {
                array[1][buttonIndex - 3] = event.target.innerHTML;
            } else if (6 <= buttonIndex && buttonIndex <= 9) {
                array[2][buttonIndex - 6] = event.target.innerHTML;
            }
            
            console.log(array);
        }
        let currentPlayer = "X"
        function switchPlayer() {
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
        function changePlayer() {
            if(this.innerHTML == ""){
                this.innerHTML = currentPlayer;
                if(currentPlayer === "X") {
                    document.querySelector(".player").innerHTML = player2.value
                } else{
                    document.querySelector(".player").innerHTML = player1.value
                }
                switchPlayer();
            } else {
                console.log("This spot is taken")
            }
            
        }
        for(let i = 0; i < cell.length; i++) {
            cell[i].addEventListener("click", changePlayer) 
            cell[i].addEventListener("click", link)
            cell[i].addEventListener("click", checkWinner)
        }
        
    }

    return {checkWinner, render, marker}
}

function display() {

    
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector(".startBtn");
    const closeButton = document.querySelector(".closeBtn");
    const player1 = document.querySelector("#player1")
    const player2 = document.querySelector("#player2")
    const confirmBtn = document.querySelector(".confirmBtn")
    const playerName = document.querySelector(".player")

    

    showButton.addEventListener("click", () => {
        player1.value = ""
        player2.value = ""
        resetBoard()
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        playerName.innerHTML = player1.value
        dialog.close();
        
    })
    
    function resetBoard() {
        const cells = document.querySelectorAll('.cell');

    
        for (let row = 0; row < array.length; row++) {
            for (let col = 0; col < array[row].length; col++) {
                array[row][col] = "";
            }
        }
        cells.forEach((cell) => {
            cell.innerHTML = "";
        });
    }
    
}



const gameFunc = game()


gameFunc.render()
gameFunc.marker()
gameFunc.checkWinner();
display()




