let Start = document.getElementById("Start");
let DiceButton = document.getElementById("DiceButton");
let Hold = document.getElementById("Hold");
let TotalScoreP = document.getElementsByClassName("TotalSCore");
let CurrentScoreP = document.getElementsByClassName("CurrentScore");
let ChnageColor = document.getElementsByClassName("TopSide");
let Dice = document.getElementsByClassName("dice");
let Turn;
let ToWIn = 50;
function RollDice() {
  let RandomeDice = Math.floor(Math.random() * 7);
  if (RandomeDice == 0) {
    RandomeDice++;
  }
  return RandomeDice;
}

Start.addEventListener("click", function () {
  let choseTurn = Math.floor(Math.random() * 2);
  TotalScoreP[0].innerHTML = 0;
  TotalScoreP[1].innerHTML = 0;
  let WinSound = new Audio("Sound/Win.Wav");
  WinSound.play();
  console.log(WinSound);
  if (choseTurn == 0) {
    Turn = "Player1";
    console.log("Turn: " + Turn);
    ChnageColor[0].style.borderColor = "red";
    ChnageColor[1].style.borderColor = "black";
  } else {
    Turn = "Player2";
    console.log("Turn: " + Turn);
    ChnageColor[1].style.borderColor = "red";
    ChnageColor[0].style.borderColor = "black";
  }
  DiceButton.addEventListener("click", function () {
    let DiceSound = new Audio("Sound/Sound.mp3");
    DiceSound.play();
    console.log(DiceSound);
    let RandomRoll = RollDice();
    console.log("DiceROLL: " + RandomRoll);
    let n;
    if (Turn == "Player1") {
      n = 0;
    } else {
      n = 1;
    }
    Dice[n].src = `Images/dice${RandomRoll}.png`;
    if (RandomRoll > 1) {
      CurrentScoreP[n].innerHTML =
        Number(CurrentScoreP[n].innerHTML) + RandomRoll;
    } else {
      CurrentScoreP[n].innerHTML = 0;
      if (Turn == "Player1") {
        if (ChnageColor[0].style.borderColor == "red") {
          ChnageColor[1].style.borderColor = "red";
          ChnageColor[0].style.borderColor = "black";
        }
        Turn = "Player2";
      } else {
        if (ChnageColor[1].style.borderColor == "red") {
          ChnageColor[0].style.borderColor = "red";
          ChnageColor[1].style.borderColor = "black";
        }
        Turn = "Player1";
      }
    }
  });
  Hold.addEventListener("click", function () {
    let n;
    let HoldSound = new Audio("Sound/Hold.Wav");
    HoldSound.play();
    console.log(HoldSound);
    if (Turn == "Player1") {
      n = 0;
    } else {
      n = 1;
    }
    if (
      Number(TotalScoreP[n].innerHTML) + Number(CurrentScoreP[n].innerHTML) >=
        ToWIn ||
      TotalScoreP[n].innerHTML >= ToWIn
    ) {
      let WinSound = new Audio("Sound/Win.Wav");
      WinSound.play();
      console.log(WinSound);
      if (n == 0) {
        window.alert("Player1 Won");
      } else {
        window.alert("Player2 Won");
      }
    }
    TotalScoreP[n].innerHTML =
      Number(TotalScoreP[n].innerHTML) + Number(CurrentScoreP[n].innerHTML);
    CurrentScoreP[n].innerHTML = 0;
    console.log(TotalScoreP);
    if (Turn == "Player1") {
      if (ChnageColor[0].style.borderColor == "red") {
        ChnageColor[1].style.borderColor = "red";
        ChnageColor[0].style.borderColor = "black";
      }
      Turn = "Player2";
    } else {
      if (ChnageColor[1].style.borderColor == "red") {
        ChnageColor[0].style.borderColor = "red";
        ChnageColor[1].style.borderColor = "black";
      }
      Turn = "Player1";
    }
  });
});
