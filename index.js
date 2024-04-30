let btn = document.querySelectorAll(".box");
let winnerMsg = document.querySelector('.winner');
let winnerName = document.querySelector('.name');

let newGame = document.querySelector("#newgame")
let reset = document.querySelector("#reset");

let flag = true;


// ------------WINNING MOVES--------------
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// --------------O/X MOVES ON CLICK------------------
btn.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(flag){
            btn.style.color = "black";
            btn.innerText = "O";
            flag = false;
        }else{
            btn.style.color = "red";
            btn.innerText = "X";
            flag = true;
        }
        btn.disabled = true;
        checkWinner();
    })
})



// -------------CHECK WINNER-----------------------
checkWinner = () =>{
    for(pattern of winPatterns){
        let val1 = btn[pattern[0]].innerText;
        let val2 = btn[pattern[1]].innerText;
        let val3 = btn[pattern[2]].innerText;
    
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                displayWinner(val1);
                disableBtns()
            };
        }
    }
}



// ------------Disable Buttons AFTER WIN --------------
disableBtns = () => {
    btn.forEach((btn) =>{
        btn.disabled = true;
    })
}


// ------------DISPLAY WINNER-------------
displayWinner = (player) =>{
    winnerMsg.classList.remove('hide')
    winnerName.innerText = player

}



// ----------Reset Game-----------
const resetGame = () => {
    flag = true;
    btn.forEach((btn) =>{
        btn.disabled = false;
        btn.innerText = "";
    })
    winnerMsg.classList.add('hide')
}

newGame.addEventListener("click" , resetGame)
reset.addEventListener("click",resetGame);
