//Player 1 == X
//Player 2 == O

/**
// To disable:
document. getElementById('id'). style. pointerEvents = 'none';
// To re-enable:
document. getElementById('id'). style. pointerEvents = 'auto';
// Use '' if you want to allow CSS rules to set the value.
 */
var isPlayer1Playing = true;

var boxes = document.getElementsByClassName("box");

var someoneWin = false;

function chechIfSomeoneWin(){
    
    if(boxes[0].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[2].innerHTML == "X"){
        document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[0].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[2].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }

    if(boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[3].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[5].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }

    if(boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[6].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[8].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }



    if(boxes[0].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[0].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }

    if(boxes[1].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[7].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[1].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[7].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }

    if(boxes[2].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[2].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }


    if(boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[0].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[8].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }

    if(boxes[2].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[6].innerHTML == "X"){
            document.getElementById("resultado").innerHTML = "Player 1 win";
        someoneWin = true;
    }
    if(boxes[2].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[6].innerHTML == "O"){
        document.getElementById("resultado").innerHTML = "Player 2 win";
        someoneWin = true;
    }

}

function stopGame(){
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.pointerEvents = "none";
    }
}

function game(nameOfTheBox){
    console.log(nameOfTheBox);
    if(isPlayer1Playing){
        boxes[nameOfTheBox-1].innerHTML = "X";
        isPlayer1Playing = false;
    }else{
        boxes[nameOfTheBox-1].innerHTML = "O";
        isPlayer1Playing = true;
    }
    document.getElementById("box"+nameOfTheBox).style.pointerEvents = "none";


    chechIfSomeoneWin()
    if(someoneWin){
        stopGame();
    }

}



