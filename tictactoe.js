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
    winCondition(evt);
    return;
  } else if (turn === "O") {
    evt.textContent = "O";
    turn = selectButton[1].getAttribute("data-icon");
    winCondition(evt);
  } else {
    console.log("There is an issue with makring the squares.");
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

  //add evt to parameter?

  function TestDiagonalWinCon(theRow, theColumn) {
    //EventCoordinates of the original evt box
    let EventCoordinates = [theRow, theColumn];

    //EventCoordinates of the boxes to their corners
    let CoordTopLeft = [EventCoordinates[0] - 1, EventCoordinates[1] - 1];
    let CoordBottomRight = [EventCoordinates[0] + 1, EventCoordinates[1] + 1];

    let CoordTopRight = [EventCoordinates[0] - 1, EventCoordinates[1] + 1];

    let CoordBottomLeft = [EventCoordinates[0] + 1, EventCoordinates[1] - 1];

    // if (typeof board === "undefined" || typeof board === "undefined") {
    //   return;
    // }

    //assigning variables for the other corners

    if (
      board[CoordBottomLeft[0]] &&
      board[CoordBottomLeft[0]][CoordBottomLeft[1]]
    ) {
      CoordBottomLeftContent =
        board[CoordBottomLeft[0]][CoordBottomLeft[1]].textContent;
    }

    if (board[CoordTopLeft[0]] && board[CoordTopLeft[0]][CoordTopLeft[1]]) {
      CoordTopLeftContent = board[CoordTopLeft[0]][CoordTopLeft[1]].textContent;
    }

    if (
      board[CoordBottomRight[0]] &&
      board[CoordBottomRight[0]][CoordBottomRight[1]]
    ) {
      CoordBottomRightContent =
        board[CoordBottomRight[0]][CoordBottomRight[1]].textContent;
    }

    if (board[CoordTopRight[0]] && board[CoordTopRight[0]][CoordTopRight[1]]) {
      CoordTopRightContent =
        board[CoordTopRight[0]][CoordTopRight[1]].textContent;
    }

    //grouping the corners efficiently in an array

    let PossibleCorners = [
      CoordTopLeft,
      CoordBottomLeft,
      CoordTopRight,
      CoordBottomRight,
    ];

    let PossibleCornerContent = [
      CoordTopLeftContent,
      CoordBottomLeftContent,
      CoordTopRightContent,
      CoordBottomRightContent,
    ];
    //run through all of the corner boxes relative to  of the evt

    //the number of "triggers" based on the
    //index is number of the array 0-3
    //CornerEventCoordinates is the value of possiblecorners, key-object
    //possiblecorners is the name of the array, with each value being a COORDINATE
    //entries creates entries giving each of the values in an array a key
    for (let [index, CornerCoordinates] of PossibleCorners.entries()) {
      //if (typeof PossibleCorners !== 'undefined') {      }

      let CornerValue = PossibleCornerContent[index];
      let CurrentEventValue = evt.textContent;

      if (CornerValue === CurrentEventValue) {
        TestForVictory(EventCoordinates, CornerCoordinates);
      } else {
        continue;
      }

      function TestForVictory(Firstvalue, Secondvalue) {

        if ((Firstvalue[0] > Secondvalue[0] && Firstvalue[1] > Secondvalue[1])
        ||  (Firstvalue[0] < Secondvalue[0] && Firstvalue[1] < Secondvalue[1])) 
        
        {
          TopLeftToBottomRight(Firstvalue, Secondvalue);
        } else if (
          Firstvalue[0] > Secondvalue[0] ||
          Firstvalue[1] > Secondvalue[1]
        ) {
          TopRightToBottomLeft(Firstvalue, Secondvalue);
        }
        else{
          console.log("Test for victory failed.")
        }
      }

      function TopLeftToBottomRight(Firstvalue, Secondvalue) {
 
        if (Firstvalue[0] < Secondvalue[0]) {
          TopLeftExtendCoordinates = Firstvalue.map((x) => x - 1);
          BottomRightExtendCoordinates = Secondvalue.map((x) => x + 1);
        }
          else if (Firstvalue[0] > Secondvalue[0]) {
           TopLeftExtendCoordinates = Secondvalue.map((x) => x - 1);
           BottomRightExtendCoordinates = Firstvalue.map((x) => x + 1);
         }
         else {
          console.log("There is an issue with extendcoordinates");
        }

        console.log(TopLeftExtendCoordinates)
        console.log(BottomRightExtendCoordinates)

        let ExtendedValue;
        if (typeof TopLeftExtendCoordinates !== "undefined" && TopLeftExtendCoordinates[0] >= 0 
        && TopLeftExtendCoordinates) {
          console.log("Inside TopLeftExtend condition");
          ExtendedValue = board[TopLeftExtendCoordinates[0]][TopLeftExtendCoordinates[1]].textContent;
          console.log(ExtendedValue);
         } else if (
           typeof BottomRightExtendCoordinates !== "undefined" && BottomRightExtendCoordinates[0] >= 0 
           && BottomRightExtendCoordinates
         ) {
           console.log("Inside Bottomright condition");
           ExtendedValue = board[BottomRightExtendCoordinates[0]][BottomRightExtendCoordinates[1]].textContent;
           console.log(ExtendedValue);
        } else {
          console.log("Making extended value isnt working!");
        }

        if (ExtendedValue === (CurrentEventValue && CornerValue)) {
          console.log(`${evt.textContent} wins!`);
        } else {
          console.log(CurrentEventValue, CornerValue, ExtendedValue);
        }
      }

      function TopRightToBottomLeft(Firstvalue, Secondvalue) {
      let TopRightExtendCoordinates;
       let BottomLeftExtendCoordinates;

        if (Firstvalue[0] > Secondvalue[0]) {
          TopRightExtendCoordinates = Secondvalue.map((value, index) => {
            if (index === 0) {
              return value + 1; // add one to the first element
            } else if (index === 1) {
              return value - 1; // subtract one from the second element
            } else {
              return value; // leave other elements unchanged
            } 
          });
        } else if (Firstvalue[0] < Secondvalue[0]) {
          BottomLeftExtendCoordinates = Secondvalue.map((value, index) => {
            if (index === 0) {
              return value + 1; // add one to the first element
            } else if (index === 1) {
              return value - 1; // subtract one from the second element
            } else {
              return value; // leave other elements unchanged
            }
          });
        } else {
          console.log("There is an issue with extending the values");
        }
        let ExtendedValue;
        console.log(TopRightExtendCoordinates)
        if (
          typeof TopRightExtendCoordinates !== "undefined" && TopRightExtendCoordinates[0] >= 0 && TopRightExtendCoordinates[1] >= 0 &&  ////////
          TopRightExtendCoordinates
        ) {
          console.log("Inside TopRightExtendCoordinates condition");
          ExtendedValue = board[TopRightExtendCoordinates[0]][TopRightExtendCoordinates[1]].textContent;
          console.log(ExtendedValue);
        } else if (
          typeof BottomLeftExtendCoordinates !== "undefined" && BottomLeftExtendCoordinates[0] >= 0 
          &&
          BottomLeftExtendCoordinates
        ) {
          console.log("Inside Bottomleft condition");
          ExtendedValue =
            board[BottomLeftExtendCoordinates[0]][
              BottomLeftExtendCoordinates[1]
            ].textContent;
          console.log(ExtendedValue);
        } else {
          console.log("Making an extended value isnt working!");
        }
       // console.log(TopRightExtendCoordinates);
        //console.log(BottomLeftExtendCoordinates);

        if (ExtendedValue === (CurrentEventValue && CornerValue)) {
          console.log(`The coordinates are ${EventCoordinates}, ${CornerCoordinates},  ${BottomLeftExtendCoordinates},  ${TopRightExtendCoordinates}`)
          console.log(CurrentEventValue, CornerValue, ExtendedValue);

          console.log(`${evt.textContent} wins!`);
        } else {
          console.log(CurrentEventValue, CornerValue, ExtendedValue);
        }
      }
    }
  }
}
