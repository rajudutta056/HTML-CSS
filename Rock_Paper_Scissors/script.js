let userScore = 0;
let comScore = 0;
const call = document.querySelectorAll(".chose");
const msg = document.querySelector("#mg");
const drawGame = () => {
    msg.innerText = "Draw Game!";
    msg.style.backgroundColor ="black"
}
const compChoice = () => {
    const options = ["rock" , "paper" ,"scissors"];
    const idx = Math.floor(Math.random() * 3);
    return (options[idx]);
}
const showWinner = (userWin ,userCho , compCho) => {
   if(userWin){
msg.innerText = `You won! your ${userCho} beats coputers ${compCho}`;
    msg.style.backgroundColor ="green"
    const userSc = document.querySelector("#user-score");
    userSc.innerText = ++userScore;

   }else{
    msg.innerText = `You Lose! coputers ${compCho} beats your ${userCho}  `;
    msg.style.backgroundColor ="red"
    const compSc = document.querySelector("#comp-score");
    compSc.innerText = ++comScore;
   }
}
const playGames = (choseId) => {
 const compCho = compChoice();
 if(compCho === choseId){
    drawGame();
 }else{
    let userWin = true;
    if(choseId === "rock"){
        userWin = compCho === "paper" ? false : true;
    }else if(choseId === "paper"){
        userWin = compCho === "scissors" ? false : true;
    }else{
        userWin = compCho === "rock" ? false : true;
    }
    showWinner(userWin , choseId , compCho);
 }
}


call.forEach((chose) => {
  chose.addEventListener("click", () => {
    const choseId = chose.getAttribute("id");
    playGames(choseId);
  });
});

