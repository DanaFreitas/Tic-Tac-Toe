const box = document.getElementsByClassName("box")

let board =  [["Monkey","Monkey2","Monkey3"],["Monkey4","Monkey5","Monkey6"],["Monkey7","Monkey8","Monkey9"]]
//[ ["1a", "2a", "3a"],["1b", "2b", "3b"],["1c", "2c", "3c"]];
//console.log(board.length);
for (row = 0; row <= board.length; row++){

//console.log(board.length);
//console.log(board[row][row1])

if (row === 0) {
    for (squarepart1 = 0; squarepart1 <= 2; squarepart1++)
   {
        box[squarepart1] = board[row][squarepart1]
        //00,01,02
        //console.log(board[row][row1])      
        box[squarepart1].textContent = board[row][squarepart1]
   }} 

else if (row === 1) {
    for (squarepart2 = 3; squarepart2 <= 5; squarepart2++)
    {
         box[squarepart2] = board[row][squarepart2]
         box[squarepart2].textContent = board[row][squarepart2 -3]
    }
}

 else if (row === 2) {
     for (squarepart3 = 6; squarepart3 <= 8; squarepart3++)
     {
          box[squarepart3] = board[row][squarepart3]
          box[squarepart3].textContent = board[row][squarepart3 - 6]
     }
 }



//    board[0][0] = box[i]
//board[1][1] = box[i+1]
//board[2][2] = box[i+2]

};