const box = document.getElementsByClassName("box");
const selectButton = document.getElementsByClassName("playerselect");
const animate = document.getElementsByClassName("animate");
const warning = document.getElementById("warning");
const beginningAnnouncement = document.getElementById("beginningAnnouncement");
const anouncementContainer = document.getElementById("announcementContainer");
const Oplayer = document.getElementById("Oplayer");
const Xplayer = document.getElementById("Xplayer");
let turn;

let board = [[], [], []];

for (row = 0; row <= board.length; row++) {
  if (row === 0) {
    for (squarepart1 = 0; squarepart1 <= 2; squarepart1++) {
      box[squarepart1] = board[row][squarepart1];
      box[squarepart1].textContent = board[row][squarepart1];
    }
  } else if (row === 1) {
    for (squarepart2 = 3; squarepart2 <= 5; squarepart2++) {
      box[squarepart2] = board[row][squarepart2];
      box[squarepart2].textContent = board[row][squarepart2 - 3];
    }
  } else if (row === 2) {
    for (squarepart3 = 6; squarepart3 <= 8; squarepart3++) {
      box[squarepart3] = board[row][squarepart3];
      box[squarepart3].textContent = board[row][squarepart3 - 6];
    }
  }
}

for (let j = 0; j < box.length; j++) {
  box[j].addEventListener("click", selectplayer);

  function selectplayer() {
    for (let k = 0; k < selectButton.length; k++) {
      selectButton[k].classList.add("animate");
      warning.style.visibility = "visible";

      setTimeout(() => {
        selectButton[k].classList.remove("animate");
        warning.style.visibility = "hidden";
      }, 1000);
    }
  }
}

//use this to have states of there being a turn and there being a game

for (let i = 0; i < selectButton.length; i++) {
  selectButton[i].addEventListener("click", begingame);


}

  function begingame(selectButton) {
    anouncementContainer.style.visibility = "visible";
    //anouncementContainer
    setTimeout(() => {
      anouncementContainer.style.visibility = "hidden";
    }, 1000);

    if (this === Oplayer) {
      turn = Oplayer.id;
    } else {
      turn = Xplayer.id;
    }
    console.log(turn);

    console.log(` The turn is ${turn}`);
  }

  function midgame(selectButton) {
    if (turn === false) {
      return;
    } else {
      console.log("You have already started a game.");
    }
  }


//   if (turn === Oplayer || turn === Xplayer) {
//   }

//   function midgame(selectButton)

//     {
//       console.log("azterketa")

//     //  for (let k = 0; k < selectButton.length; k++) {
//     //    this.disabled = true;
//     //    console.log("Please Finish or reset the game.")
//     //  }
//  }
