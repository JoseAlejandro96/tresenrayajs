//Player 1 == X
//Player 2 == O
var isPlayer1Playing = true;

var boxes = document.getElementsByClassName("box");
var gameArray = [["","",""],
                ["","",""],
                ["","",""]];

function game(nameOfTheBox){
    console.log(nameOfTheBox);
    if(isPlayer1Playing){
        boxes[nameOfTheBox-1].innerHTML = "X";
        isPlayer1Playing = false;
    }else{
        boxes[nameOfTheBox-1].innerHTML = "O";
        isPlayer1Playing = true;
    }
}

