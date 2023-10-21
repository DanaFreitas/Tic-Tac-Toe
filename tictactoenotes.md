# tictactoenotes

make grid

style grid
make each part a button

assign players
    ask if X or O first
        bonus:assing differnt things

signal the turn of a certain player
    have text on top
    change some sort of state for the program

let player click button
    have the square colored
have the grid identfy whats in the square

switch player designation upon click

have the program identify the winning condition




10/5

figured out i can link each box in the arrays with an element, conceptually.
    I just need the right loop to makeit work.

An issue is the length of the jagged array is 3, not 9. There needs to be a good way to access each array in it.

10/6

loops are 
00 01 02
10 11 12
20 21 22


it seems like .push is an important possibility


10/13 Will use state to describe players' turn.

maybe i could have the arrays start off empty, then name and push the html elements to each part

console.log(board[0])
console.log(board[1])
console.log(board[2])

These are arrays 1 2 and 3

array [i][i] = board[i]
array [i][i + 1] = board[i+1]
array [i][i + 2] = board[i+2]


i + different group

    //console.log(board[i][i])
    //console.log("test")   This causes an infinite loop

    10/15

    thats because I had i=0 instead of i===0
    board[0] is

    Issue. I have 2 counters that need to run at the same time
        one is for the rows. they need to be some variety of 1-3
            row[]
        one is for the boxes. they need to be some variety of 1-9
                box[row]
        
Monkey
Monkey2
Monkey3
Monkey5
Monkey5
Monkey5
Monkey9
Monkey9

reassigning row2 to 0-2 instead of 3-5 just rids the first roaw

I solved by assigning the htlm element and the content two different ways

The current issue is how to solve the third row, which for somereason goes
monkey 8, monkey 9

quick issue, bad assigning.

This has taken about an hour. Now I can focus on the next part of the effort, forming the boxes themselves with css.

