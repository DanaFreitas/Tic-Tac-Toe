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
      //console.log(valueCollection);
    }

    if (JSON.stringify(valueCollection) === JSON.stringify(["O", "O", "O"])) {
      console.log(`${evt.textContent} wins!`);
    }

    if (JSON.stringify(valueCollection) === JSON.stringify(["X", "X", "X"])) {
      console.log(`${evt.textContent} wins!`);
    }
  }

  function TestDiagonalWinCon(theRow, theColumn) {
    const Coordinates = [theRow, theColumn];
    const Symbol = evt.textContent;
    let Ledger = 1;
    for (let i = 0; i < board.length; i++) {
      Coordinates[0] += 1;
      Coordinates[1] += 1;

      if (
        typeof board[Coordinates[0]]  === "undefined" ||
        typeof board[Coordinates[1]] === "undefined"
      ) {
      //  console.log(board[Coordinates[0]])
        //console.log(board[Coordinates[1]])
        //console.log("MONkey");
        break;
      }
      CalculateTopLeftToBottomRight(Coordinates);
    }

    function CalculateTopLeftToBottomRight(Coordinates) {
      let SecondSymbol = board[Coordinates[0]][Coordinates[1]];
     //  console.log(SecondSymbol);
      
      //console.log(evt.textContent);

      //need to find the textcontent of the next element

      if (SecondSymbol.textContent === evt.textContent) {
       // Coordinates[0] += 1;
       // Coordinates[1] += 1;
        Ledger += 1;
      } else {
        return;
      }

      if (Ledger === 3) {
        console.log(`${evt.textContent} wins!`);
      }

      //console.log(board[Coordinates[0]][Coordinates[1]])
    }

    //i need to translate the coordinates to the board
  }
}
