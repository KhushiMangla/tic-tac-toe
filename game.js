let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgWrapper = document.querySelector(".msg-wrapper");
let winMsg = document.querySelector("#win-msg");

// Player X & Player Y

let turnO = "true";

const reset = () => {
  turnO = "true";
  enableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    msgWrapper.classList.add("hide");
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
      box.style.color = "#6D28D9";
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;

    checkWinner(); // btn becomes unclickable;
  });
}

const showWinner = (winner) => {
  winMsg.innerText = `Winner is ${winner}`;
  msgWrapper.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let boxIdx1 = boxes[pattern[0]].innerText;
    let boxIdx2 = boxes[pattern[1]].innerText;
    let boxIdx3 = boxes[pattern[2]].innerText;

    if (boxIdx1 != "" && boxIdx2 != "" && boxIdx3 != "") {
      if (boxIdx1 === boxIdx2 && boxIdx2 === boxIdx3) {
        showWinner(boxIdx1);
      }
    }
  }
};

resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", reset);
