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

for (rownumber = 0; rownumber <= board.length; rownumber++) {
  if (rownumber === 0) {
    let part1 = rownumber;

    for (row1 = 0; row1 <= 2; row1++) {
      part1 = board[rownumber].push(box[row1]);



      // box[0].textContent =  board[rownumber][row1];
      //  console.log(board[rownumber][row1])
    }
  } else if (rownumber === 1) {
    let part2 = rownumber;

    for (row2 = 3; row2 <= 5; row2++) {
      part2 = board[rownumber].push(box[row2]);

      //box[1].textContent = board[rownumber][row2 - 3];
    }
  } else if (rownumber === 2) {
    let part3 = rownumber;

    for (row3 = 6; row3 <= 8; row3++) {
      part3 = board[rownumber].push(box[row3]);
      // box[2].textContent = board[rownumber][row3 - 6];
    }
  }
}


for (let j = 0; j < box.length; j++) {
  box[j].addEventListener("click", function(evt) {
    if (started === true) {
      markSquare(evt.target);
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

      itStarted = true;
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
  if (evt.textContent !== "") {
    {
      return;
    }
  }
  if (turn === "X") {
    
    evt.textContent = "X";
    turn = selectButton[0].getAttribute("data-icon");
    //console.log(this)
    //console.log(evt.target)
    winCondition(evt);
    return;
  } else if (turn === "O") {
    evt.textContent = "O";
    turn = selectButton[1].getAttribute("data-icon");
    winCondition(evt);
  } else {
    console.log("Simulation failed.");
  }

  return;

  // },
  //        {once: true}
  //    );
}

// while (itStarted === true) {
//   console.log("Azterketa");

//   winCondition();
//   console.log("Azterketa2");
// }



function winCondition(evt) {
  for (let i = 0; i < board.length; i++) {
    const innerArray = board[i];
    const buttonIndex = innerArray.indexOf(evt);
   // console.log(innerArray)
    if (buttonIndex !== -1) {
      console.log("Button found at row:", i, "column:", buttonIndex);
      console.log("Entire board:", board);

      TestHorizontalWinCon(innerArray)

      return;
    }
  }

  function TestHorizontalWinCon(theRow) {

//do i need to make an element to represent the row?

const test2 = (element) => element.textContent === evt.textContent;

const youWin = theRow.every(test2)

if (youWin) {
  console.log(`${evt.textContent} wins!`)
}
//check if each textcontent is the same
  }
  


  console.log("Button not found in the board");
  console.log("Entire board:", board);
}


// function winCondition(evt) {
//   const figure = board.indexOf(evt) 
//   console.log(evt)
//   console.log(figure)
 // console.log(board) }

  
  //  if (horztestcheck === true){
    // console.log(`${turn} wins!`)
   // }
 

  // if (board[rownumber].textContent === "X") {
  //   console.log(row1);
  //   console.log("You win X");
  //   console.log(row1.every((element) => element === "X"));
  // } else if (box[rownumber].textContent === "O") {
  //   console.log("You Win O");
  //   console.log(row1.every((element) => element === "O"));
  // }


//if everyboard[x][whatever] is true 
  //horizontal
//if every whatever][x] is true 
  //vertical
//if every  [0][0]
              //[0+1][0+1]
                //[0+2][0+2]
    //if every  [0][2]
      //[0+1][0-1]
      //[0+2][0-2]


//console.log(board[1][1])

//}
