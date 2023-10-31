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

10/21 have made most of the visual bones. just need to center the grid and giev it personality. should I do that first or some fo the js?
Maybe some of the js and worry about the visuals later. Expect the grid. That is just nagging.

change cursor each turn

10/22
Functional languages are good when you have a fixed set of things, and as your code evolves, you primarily add new operations on existing things. 
Object-oriented languages are good when you have a fixed set of operations on things, and as your code evolves, you primarily add new things. 

As I am manipulating an existing board, lll nuse fp, althougfh i should try oop next project

attempting to set up functions for the board pieces. 
function selectplayer(box[j]) isnt workable? Am I putting it in the wronf scope?

10/26
The loop is < not <= 

     box[j].addEventListener('click', selectplayer)
     NOT
         box[j].addEventListener('click', selectplayer())
    The second one causes the function to happen immediately


    need to have the loop affect both the first and the second buttons
    

10/27

use color scheme of lbrown dbrown and green
    g/lb/db

Have the warning appear in html. do some animation similar as with the color change

10/28 have the whitebox to put alert in. just needed to make it absolute. the issue is centering the text vertically. 

10/29 I need to make the PARENT flex, not the child. Now i can focus on giving a state. 

I need to deactivate the buttons while the game is active

make an error message for the program


10/30

I need to figure out how to make buttons unusable based on the fact the game has started

while makes a loop, avoid that.x    
