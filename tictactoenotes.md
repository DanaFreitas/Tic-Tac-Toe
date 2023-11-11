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


I made the incorporate two functions at once. I think this is helping me get a feel for functional programming. However, whenever I select them, I get "Xplayer tictactoe.js:76:13
 The turn is Xplayer tictactoe.js:78:13
You have already started a game." multiple times in quick succession."


10/31 

the variable isnt assigning properly

it also says "you have started the game" the first time I click, and not subsequent times. 


What do I need to do? 

I need to run the for loop and hve it. 

turn is being assigneed whenever i click on the first button
I need to seperate those functions into different loops.

First though, I should figure out how to assign the buttons correctly instead os splittin gmy attention

Couldnt use, this, but why not assign the variable in the for loop? Did that, and well.


have if statement where if the game started, then print the warning and have it return

Should I have the if statement in the initial event, or should i have it later on?

    initial
        checking needs to come first
            I need a way to clare the game has begun, like let gamebegun = true; but i need that to be global. 
    later on
        less messy


Issue, I need a way to check a condition that hasnt happened yet. Maybe it should be that I need to reverese the order of the code?
    maybe the condition is spmething being blank, if blank, start game, if not then put warning. I need to figure out the scoping.

11/1 return helps bring things to global scope
return ending function

The button neeeded to do different functions at different times. helped with a simple if statement


had problem adding html to the buttons. I think it needs to be added with js due to js defining it

In selecting the squares, the first two buttons are always the ones that are selected. not known why
    OI had selectbutton instead of box
        and it selecyts all of them


Turn isnt registering when I click the boxes
its undefined even when I remove everything else from the function.

I think the issue is that the declaring of the turn wasnt global.
even inputting it in the function as a parameter doesnt work

11/2

    let turn = selectButton[i].getAttribute("data-icon");
the problem is that i shadowed by declaring twice
        removed the let


first click, nothing

second click x on spot
    o isnt defined

When I play as X, <button id="box5" class="box"> is defined, but no reverse as O.

It doesnt change the turn name in the announcement

the turns are now defined, but i need to change them now


x: 1 x then all o
o:all 0

the amount is data in "turn" is increasing increamentally, it isnt being replaced


selectbutton[] is working


11/4 it 

marksquare does start off knowing the correct turn
the loop is being run multiple times incredmentally after each click
    once, then twice, then thrice etc

    event listeners kept getting added


    with {once:true}, each square will run the event multiple times, then once at a time.
    this happens until you click off of the wquare, at which the process will restart

    the while loop helps keep the values from piling up in one square
          { once: true } keep the counter from moving over

maybe use continue




maybe i need to alter the remove event. or at least check on that/
or add it



turn = selectButton[0].getAttribute("data-icon");


turn is returning the entire button, not the value O or X

need to understand why the first click doesnt work, then, onto the algorithm

colored the boxes brown

find childish font


11/6 having a test before the event listener shows its being triggered 9 times.
box[k] does the same

11/7 event bubbling

11/9 there being two event listeners is a problem. get rid of the inner one. 

if i click the third box, j is 2 but (Array point of)k is 0. why are thy different? 


11/11 for the function evt is the parameter and the button is the argument


ideas for having the algorithm for win

squarepart