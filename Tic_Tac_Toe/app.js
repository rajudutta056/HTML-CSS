let clickBtn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset");
let newButton = document.querySelector("#newGame");
let msseg = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let playerX = true;
const reset = () => {
    msseg.classList.add("hide");
    playerX = true;
    enableBox();
}
const disableBox = () => {
    for(let box of clickBtn){
        box.disabled = true;
    }
}
const enableBox = () => {
    for(let box of clickBtn){
        box.disabled = false;
        box.innerText="";
    }
}
let winPattern = [
    [0 ,1 ,2],[0, 3, 6],[0 ,4 ,8 ],[1, 4, 7],[2, 5, 8],[2, 4, 6],[3, 4, 5],[6 ,7 ,8]
];

clickBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (playerX) {
            btn.innerText = "X";
            playerX = false;
        }else{
            btn.innerText = "O";
            playerX = true;
        }
    btn.disabled = true;
    winnerCheck();
    });
});
const showWinner = (winner) => {
msg.innerText = `Winner: ${winner}`;
msseg.classList.remove("hide");
disableBox();
}

const winnerCheck = () => {
    for(let val of winPattern) {
        let val1 = clickBtn[val[0]].innerText;
        let val2 = clickBtn[val[1]].innerText;
        let val3 = clickBtn[val[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
          if(val1 === val2 && val2 === val3){
            showWinner(val1);
          }
        }
    }
}
newButton.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);
