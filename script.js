let round = 1;
let isDraw = true
let movesArray = [[NaN, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]]

    let drawMoveToBoard = (x) => {

        if (document.getElementById(x).innerHTML == ""){
            round++
        }

        let cellData = document.getElementById(x).innerHTML

        if( round % 2 == 0 && cellData == ""){
            document.getElementById(x).innerHTML = 'x';
            movesArray[x[0]][x[1]] = 'x'

        }

        else if ( round % 2 == 1 && cellData == "") {
            document.getElementById(x).innerHTML = 'o';
            movesArray[x[0]][x[1]] = 'o'
        }

        checkGameStatus()
    }

let checkGameStatus = ()  => {
    if (
    (movesArray[0][0] == movesArray[0][1] && movesArray[0][0] == movesArray[0][2]) ||
    (movesArray[1][0] == movesArray[1][1] && movesArray[1][0] == movesArray[1][2]) ||
    (movesArray[2][0] == movesArray[2][1] && movesArray[2][0] == movesArray[2][2]) ||
    (movesArray[0][0] == movesArray[1][0] && movesArray[0][0] == movesArray[2][0]) ||
    (movesArray[0][1] == movesArray[1][1] && movesArray[0][1] == movesArray[2][1]) ||
    (movesArray[0][2] == movesArray[1][2] && movesArray[0][2] == movesArray[2][2]) ||
    (movesArray[0][0] == movesArray[1][1] && movesArray[0][0] == movesArray[2][2]) ||
    (movesArray[0][2] == movesArray[1][1] && movesArray[0][2] == movesArray[2][0]) 
    ) {
        document.getElementById("finish").style.display = "flex"
        isDraw = false
        if (round %2 == 0){
            document.getElementById("text").innerHTML = "Player X has won"
        } else {
            document.getElementById("text").innerHTML = "Player O has won"
        }
    }

    if (round == 10 && isDraw){
        document.getElementById("finish").style.display = "flex"
        document.getElementById("text").innerHTML = "Draw"
    }
}


