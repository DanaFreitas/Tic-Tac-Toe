const box = document.getElementsByClassName("box");
const selectButton = document.getElementsByClassName("playerselect");
const animate = document.getElementsByClassName("animate");
const warning = document.getElementById("warning");
const beginningAnnouncement = document.getElementById("beginningAnnouncement");
const anouncementContainer = document.getElementById("announcementContainer");
let turnAnnouncer = document.getElementById("turnAnnouncer");
let started = false;
console.log(started)

//const 2 = "2";
//const Oplayer = document.getElementById("Oplayer");
//const Xplayer = document.getElementById("Xplayer");
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
     
      if(started === true) {
        console.log("button azterketa")
        console.log(started)
        return;}
     
      selectButton[k].classList.add("animate");
      warning.style.visibility = "visible";

      setTimeout(() => {
        selectButton[k].classList.remove("animate");
        warning.style.visibility = "hidden";
      }, 1000);

     
      
    }
  }
}



for (let i = 0; i < selectButton.length; i++) {
  selectButton[i].addEventListener("click", function () {


if(started === true){
  console.log("You need to reset the game.")
  console.log(started)
  return;
}


    let turn = selectButton[i].getAttribute("data-icon");

    begingame(turn);


  let itStarted = true;  
  });
}

function begingame(turn) {
  anouncementContainer.style.visibility = "visible";
  setTimeout(() => {
    anouncementContainer.style.visibility = "hidden";
    turnAnnouncer.textContent=`It's ${turn}'s turn.`

  }, 500);
  console.log(turn)
  console.log(started)
return started = true;
}


if(turn) {
  for (let j = 0; j < box.length; j++) {
    box[j].addEventListener("click", playinggame())

    function playinggame()
    {console.log(` azterketa playyinggame function`)}
    
  
}}