let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#resetbtn");

let body = document.querySelector(".resettext");

let msg = document.querySelector(".msg");

let msgcontainer = document.querySelector(".msg-container");

let newGame = document.querySelector(".new-game");
let truno = true;
let winpatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  truno = true;
  enableboxex();
  msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked ");
    if (truno) {
      box.innerText = "O";
      truno = false;
    } else {
      box.innerText = "X";
      truno = true;
    }
    box.disabled = "true";
    checkWinner();
  });
});

const disableboxex = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enableboxex = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winnner is ${winner}`;
  msgcontainer.classList.remove("hide");
  
  disableboxex();
}

const checkWinner = () => {
  for (let patter of winpatters) {
    let pos1val = boxes[patter[0]].innerText;
    let pos2val = boxes[patter[1]].innerText;
    let pos3val = boxes[patter[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner ", pos1val);

        showWinner(pos1val);
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


