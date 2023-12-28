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
  box[j].addEventListener("click", function (evt) {
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
}

function winCondition(evt) {
  for (let i = 0; i < board.length; i++) {
    const innerArray = board[i];
    const buttonIndex = innerArray.indexOf(evt);
    if (buttonIndex !== -1) {
      TestHorizontalWinCon(innerArray);
      TestVerticalWinCon(buttonIndex);
      TestDiagonalWinCon(i, buttonIndex);
      return;
    }
  }

  function TestHorizontalWinCon(theRow) {
    const TestTheElement = (element) => element.textContent === evt.textContent;

    const youWin = theRow.every(TestTheElement);

    if (youWin) {
      console.log(`${evt.textContent} wins!`);
    }
  }

  function TestVerticalWinCon(theColumn) {
    let valueCollection = [];

    for (i = 0; i < board.length; i++) {
      const valueGrabber = board[i][theColumn].textContent;
      if (valueGrabber) {
        valueCollection.push(valueGrabber);
      } else {
        break;
      }
    }

    if (JSON.stringify(valueCollection) === JSON.stringify(["O", "O", "O"])) {
      console.log(`${evt.textContent} wins!`);
    }

    if (JSON.stringify(valueCollection) === JSON.stringify(["X", "X", "X"])) {
      console.log(`${evt.textContent} wins!`);
    }
  }

  function TestDiagonalWinCon(theRow,theColumn ) {
    let Coordinates = [theRow,theColumn];

    let CoordTopLeft = [Coordinates[0] - 1, Coordinates[1] - 1];
    let CoordBottomRight = [[Coordinates[0] + 1],[Coordinates[1] + 1]];

    let CoordTopRight = [Coordinates[0] - 1, Coordinates[1] + 1];

    let CoordBottomLeft = [[Coordinates[0] + 1], [Coordinates[1] - 1]];


    if (
      board[CoordBottomLeft[0]] && 
      board[CoordBottomLeft[0]][CoordBottomLeft[1]] 
    ) {
      CoordBottomLeftContent = board[CoordBottomLeft[0]][CoordBottomLeft[1]].textContent;
    } else {
      
      console.error("CoordBottomLeft indices are out of bounds");
    }
    
    
    if (
      board[CoordTopLeft[0]] &&
      board[CoordTopLeft[0]][CoordTopLeft[1]] 
    ) {
      CoordTopLeftContent = board[CoordTopLeft[0]][CoordTopLeft[1]].textContent;
    } else {
      
      console.error("CoordTopLeft indices are out of bounds");
    }


    if (
      board[CoordBottomRight[0]] && 
      board[CoordBottomRight[0]][CoordBottomRight[1]] 
    ) {
      CoordBottomRightContent = board[CoordBottomRight[0]][CoordBottomRight[1]].textContent;
    } else {
      console.error("CoordBottomRight indices are out of bounds");
    }
    
    if (
      board[CoordTopRight[0]] && 
      board[CoordTopRight[0]][CoordTopRight[1]] 
    ) {
      CoordTopRightContent = board[CoordTopRight[0]][CoordTopRight[1]].textContent;
    } else {
      console.error("CoordTopRight indices are out of bounds");
    }

 //  let CoordTopLeftContent = (board[CoordTopLeft[0]][CoordTopLeft[1]].textContent)
   // let CoordBottomLeftContent = ((board[CoordBottomLeft[0]][CoordBottomLeft[1]]).textContent)
    //let CoordTopRightContent = (board[CoordTopRight[0]][CoordTopRight[1]].textContent)

    // let CoordBottomRightContent = (board[CoordBottomRight[0]][CoordBottomRight[1]].textContent)

           if (
             typeof board === "undefined" ||
             typeof board === "undefined"
           ) {
return           }

if ((CoordTopLeftContent && CoordBottomRightContent === evt.textContent) || (CoordBottomLeftContent && CoordTopRightContent === evt.textContent)) {
  console.log("Victory")
}
else {
  console.log("Fail")
  return;}


    //if ()

    //const Symbol = evt.textContent;
    // let Ledger = 1;
    //     for (let i = 0; i < board.length; i++) {

    //       if (
    //         typeof board[Coordinates[0]]  !== "undefined" &&
    //         typeof board[Coordinates[1]] !== "undefined"
    //       )
    // {
    //       Coordinates[0] += 1;
    //       Coordinates[1] += 1;
    // }

    //       if (
    //         typeof board[Coordinates[0]]  === "undefined" ||
    //         typeof board[Coordinates[1]] === "undefined"
    //       ) {
    //         break;
    //       }
    //       CalculateTopLeftToBottomRight(Coordinates);
    //     }

    //     function CalculateTopLeftToBottomRight(Coordinates) {
    //       let SecondSymbol = board[Coordinates[0]][Coordinates[1]];

    //       if (SecondSymbol.textContent === evt.textContent) {
    //         Ledger += 1;
    //       } else {
    //         return;
    //       }

    //       if (Ledger === 3) {
    //         console.log(`${evt.textContent} wins!`);
    //       }

    //     }
  }
}
