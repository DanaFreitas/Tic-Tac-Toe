const box = document.getElementsByClassName("box");
const selectButton = document.getElementsByClassName("playerselect");
const animate = document.getElementsByClassName("animate");
const warning = document.getElementById("warning");
const beginningAnnouncement = document.getElementById("beginningAnnouncement");
const anouncementContainer = document.getElementById("announcementContainer");
let turnAnnouncer = document.getElementById("turnAnnouncer");
let started = false;
let itStarted = false;

let turn;
let board = [[], [], []];

//box[row1].textContent =  board[rownumber][row1];
//hows this make the numbers idsappear

for (rownumber = 0; rownumber <= board.length; rownumber++) {
  if (rownumber === 0) {
    for (row1 = 0; row1 <= 2; row1++) {
      box[row1] = board[rownumber][row1];
      box[row1].textContent =  board[rownumber][row1];

    }
  } else if (rownumber === 1) {
    for (row2 = 3; row2 <= 5; row2++) {
      box[row2] = board[rownumber][row2];
      box[row2].textContent = board[rownumber][row2 - 3];
    }
  } else if (rownumber === 2) {
    for (row3 = 6; row3 <= 8; row3++) {
      box[row3] = board[rownumber][row3];
      box[row3].textContent = board[rownumber][row3 - 6];
    }
  }

  console.log(typeof board)
  console.log(board)
  //console.log(board[row1]) doesnt exit
  console.log(typeof box[row1] )
  console.log(box[row1])


  //console.log(typeof box[row2] )
  //console.log(box[row2])

  console.log(typeof box[row3] )
  console.log(box[row3])

  console.log(typeof row1)
  console.log(row1)

}

//console.log(document.getElementById(box[row1]))

for (let j = 0; j < box.length; j++) {
  box[j].addEventListener("click", function () {
    if (started === true) {
      markSquare(box[j]);
    } else {
      selectplayer();
    }
  });
}

function selectplayer() {
  for (let k = 0; k < selectButton.length; k++) {
    if (started === true) {
      return;
    }

    selectButton[k].classList.add("animate");
    warning.style.visibility = "visible";

    setTimeout(() => {
      selectButton[k].classList.remove("animate");
      warning.style.visibility = "hidden";
    }, 100);
  }
}

for (let i = 0; i < selectButton.length; i++) {
  selectButton[i].addEventListener("click", function () {
    if (started === true) {
      return;
    }

    turn = selectButton[i].getAttribute("data-icon");

    begingame(turn);

    let itStarted = true;
    return turn;
  });
}

function begingame(turn) {
  anouncementContainer.style.visibility = "visible";
  setTimeout(() => {
    anouncementContainer.style.visibility = "hidden";
    turnAnnouncer.textContent = `It's ${turn}'s turn.`;
  }, 5);
  return (started = true);
}

function markSquare(evt) {



  if (evt.textContent !==""){
    {return}
  }
  if (turn === "X")
{
  evt.textContent = "X";
  turn = selectButton[0].getAttribute("data-icon");
  winCondition()
    return;
}
  else if (turn === "O") {
    evt.textContent = "O";
    turn = selectButton[1].getAttribute("data-icon"); 
    winCondition() }
  
    else {
      console.log("Simulation failed.");
    }



     return;


          
        
     // },
    //        {once: true}
//    );




  }

  while (itStarted === true) {
    console.log("Azterketa")

    winCondition()
    console.log("Azterketa2")
  }



function winCondition() {
  if (box[rownumber].textContent === "X"){
    console.log(row1)
    console.log("You win X");
    console.log(row1.every(element => element === "X"))

  }
else if (box[rownumber].textContent === "O"){
  console.log("You Win O")
  console.log(row1.every(element => element === "O"))
}

}
