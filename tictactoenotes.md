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

figure out the row and column names


three different types of algorithms running together

if row1[rowall]

if box[rowX][X]

if box[rowx][x] AND box[rowx+1][x+!]

if box[rowx][x] AND box[rowx-1][x-1]


11/18

wincon1: only works when start with x and happens everytime x is pressed
        doesnt work in any conditions for o

        I might not need the while statement. test to be sure

11/19 

I discovered the giant issue. board[row1] doesnt exist. the arrays in board are empty. box[row1] exists and its only box4. the values have not been correctly assigned. row2 and row3 dont exist. The buttons work because theyre tied to events. 

need to reexamine the entire system of assign variables


11/23

i need to do assigning of the board AND the boxes

i need to push new variables onto the array

      board[rownumber] = board[rownumber].push("Monkey")
            wrong because it doesnt return 

I need to declare the individual arrays in board

    for loop X
    
    {
        board[x] 
    }


in those declarations, popuate with box[x-x+2]


when testing push()

x = monkey.push(chimp)
    x is the quantity
    monkey is the array itself

make an algorithm to test the values of an array
    every() will help
        for rows and columns
    inclues() may help
        test the tops corners, then move on?

    i dont think indexof() will help?


    11/24


const winconvert board.every(function(board[0])
console.log("Victory)
  )

  practice every()


  11/25

  I need to have the algorithms trigger based on the buttons being pressed. no need to review every single block. just ones related to the one click

  shares name first or second []

  [-1][-1] AND [+1][+1] true

  OR

  [-1][+1] AND [+1][-1] true 

  values() might be useful. 

  if 
    array[evt-1][evt+1]...equal whatever, dealre you won
        board[evt-1]


        11/26

    evt can pass one from function to function in a chain


    11/29

    try changing the names of the parameters. go from referencing the event to referencing the element in the event.

    how to make evt.target transfer to the next functions over?

    it works at the initial event listener

    12/2

      var button = document.getElementById('myButton');


button.addEventListener('click', function(evt) {
	if (button.classList.contains("monkey")) {
  console.log("Part1 works")
  Parttwo(evt.target)
  }})
function Parttwo(evt){
if (button.classList.contains("monkey")) {
  console.log(evt.textContent)

}}

I managed to pass down the values. I need to have the evt be a parameter and the evt.target be an argument. the argument is the value being used
in context with the parameter, with is like a variable to be used in a function. its how the text of the event can be used in relation to the event, 

12/3

if the txtcontent of row
    === txt.content
        you win

alorithm
    loop through the row the evt is in.




how to check where the event is taking place

I need to find the relationship between the button bring triggered in the event and its location in the array. from there,
start the algorithms

first step. try using array findIndex

look at last chatgpt answer

12/4

trying indexof

the issue is indexof is for buttons and 2d arrays meant it was hitting an array
do loop for inner part then use index of

also, -1 means its not there

horizontal search for other values that share i
vertical make other values share button index

12/15

make a this for the current event?

need to review code after long time off

12/18



Button found at row: 0 column: 1 tictactoe.js:140:15
Entire board: 
Array(3) [ (3) […], (3) […], (3) […] ]
​
0: Array(3) [ button#box1.box, button#box2.box, button#box3.box
 ]
​
1: Array(3) [ button#box4.box, button#box5.box, button#box6.box
 ]
​
2: Array(3) [ button#box7.box, button#box8.box, button#box9.box
 ]
​
length: 3

12/18

for the wincons

set up loops

horz loop
    find i
        scan board
            if is have the same values in the button, win

ver loop
    find buttonindex
        scan board
            if butoonindex has the same values in the button, win

diagnal
    take coords ex(1,1)
        run algorithm
            subtract each value by 1,
                if some, do again
                if not, ad 1,1
            do -1,+1
                if same, do again
                if not, +1,-1


12/19

i need a way to verify every element is the same
    with .every() I know how I could verify if they are all an X or an O, but not discriminate
    maybe I could verify is the textcontent = that of the event

    can do that

    used every


will naturally have some trouble with the verical.

I am not testing a 3 element array. I am testing the first element in 3 different arrays.

I need to record if its part 1 2 or 3 of one of the inner arrays
check every inner array with the same index, and use eevrey

I have the column number, i need to get the other column numbres. need the names of the innerarrays
    board[0] board[1] board[2]
        for loop them. 
            for each loop. append the value to an array?

the empty values are being added to the array, need to stop that

12/20

checkx and checko are flawed somehow.

intended them to collect either the Xs or the Os. 

used JSON stringify to make the arrays pass by value instead  of reference 

Finished X

diagnal
    take coords ex(x,x)
        run algorithm

        record if an x or an o
            do -1,-1
                symbol same
                    continue
                symbol different
                    stop
                if error from hitting wall
                    stop



            do -1,+1
                symbol same
                    continue
                symbol different
                    stop
                if error from hitting wall
                    stop


need to find a way to get first coordinate number

found

Will need to have a way for the coordinates to attach to the board

12/21

console.log(board[Coordinates[0]][Coordinates[1]])

ledger doesnt work. need to find way to mak the loop terminate is I go off of the board

can do the diagonal in one direction

need to make more efficient


I have the coordinates
I have the if undefined
I have 4 things to do to them
    +1/+1
    +1/-1
    -1/+1
    -1/-1

if undefined
    do i try all 4

do 1/1

if that has right symbol, keep going
    add to ledger

if the adjacent block is empty or has another symbol or blank
    reset and go to the next order

how do i reset
    do i do the physical math
        ex -1/-1 followed by +1/-1
    set the coordinates to their default and try again

and the ledger? dont want to make warped lines
    if ledger value is 2, it only checks once more
        1/1 -1/-1  and 1/-1 -1/1 should be paired together somehow if so



structure

do i need loop?


    coordinates set
    if notthing wrong
    1/1

    if nothing wrong
    1/1 again

    if something wrong
    reset
    -1/-1
    
        


12/23 

do multiple calculations at once

(1,1)

do (+1/+1) (-1,-1) together
OR (-1,+1) (+1,-1) together

if both of those values are the same as the one registered, you win

else, nothign happens


be careful board[2][0] =/= board[2,0]

const will make the values stay after the function comepletes. let wont


12/25

console.log(board[CoordBottomLeft])
    Array [ (1) […], (1) […] ]
    0: Array [ 0 ]
    1: Array [ 2 ]
    length: 2
console.log(board[0][2])
    <button id="box3" class="box" type="button">

    the former is trying to unlock the propetry of an object
    the later is access a node of an array


    board[test] is assuming its a 1d array. need to make 2d.
        having [0][2] makes an error as its 2 values in what should be one

    console.log(board[CoordBottomLeft[0]][CoordBottomLeft[1]])


if (the 2 sets of coord) same tetx as evt

12/26

just need to set up proper wincon

made MASSIVE error. My code assumes the middle square is the last one. there are 8 where it isnt!
I need to go back in my code. Have an algorithm that checks is a corner shares something and the subsequent does the same.
...I think this is a branching algorithm.

if corner.evt === evt.textcontent {

function CheckAgain(corner.evt)

}

function CheckAgain(Thecorner){

    if (Thecorner.textContent === evt){
        You Win!!!
    }
}

try catch seems to be something that should be limited

12/27

another issue i realized with what I typed above. THAT only works if the last piece is in the corner. I suppose I need both models...

For check again, I need two things. 

To do the orginal check for the second point
to do the reverse check for the original point

switch statement?


switch





12/28

switch(FirstPart) {

    case CoordTopLeftContent:
        Newpart(CoordBottomContent)
}
    
12/29

    just need to get that condition correctly

    look at line 223

    needed to use for...of to have one of multiple possible variables bre the input.

    NEED TO FIGURE OUT WHY ITS SAYING THE WRONG TEAM IS WINNING.
    
    For some reason, its only an issue diagonally

    also, an issue is that its printing the wining statement multiple times
        trying to find pattern


        for wrong team, the issue is I typed
        "turn"
        not
        "evt.textContent"

the issue with the printing multiple statements has something to do with the for...of loop. Although my possibilities were limited, I didnt have a problem before

10/30

I think I got it?

Need to fulfill condition to have the diagonal condition fulfilled for 123, not just 132

have function where the first math is repeated a second time

ex -1/+1 -> -1/+1

samedirection and opposite direction functions can likely be combined. need to do testing first.

managed to get same direction to work, but opposite. getting in each others way
    will try switching the order of the functions
        thats the reason!
    need to make it so that if one fails, the other will take its place


check chatgpt. the 1st function stopping the second


123123
an undefined variable can matter even in a consoe.log statement



when otherdirection first function and test otherdirection
you win
    286  Uncaught TypeError: can't access property "-1", board[TheThirdBox[0]] is undefined

when otherdirection first function and test samedirection
    286 Uncaught TypeError: can't access property "-1", board[TheThirdBox[0]] is undefined
    246.31 Uncaught TypeError: can't access property "textContent", board[TheThirdBox[0]][TheThirdBox[1]] is undefined
    264.31 Uncaught TypeError: can't access property 3, board[TheThirdBox[0]] is undefined


  when same direction first function and test otherdirection
    287 Uncaught TypeError: can't access property "-1", board[TheThirdBox[0]] is undefined

when samedirection first function and test samedirection
    285.29 Uncaught TypeError: can't access property "-1", board[TheThirdBox[0]] is undefined
    285.29Uncaught TypeError: can't access property 0, board[TheThirdBox[0]] is undefined
    288/289 you win
    245 Uncaught TypeError: can't access property 3, board[TheThirdBox[0]] is undefined

check chat gpt


have the first part get a check variable that goes off. give second function an if statement checking for that


1/1

The second function is set off if I do 0 (0,0) X (0,1) 0{1,1}. That isn't diagonal and shouldnt be fulfilling the conditions. need to look over the functions

No equivalent issue the opposite way. Still need to look over functions again

going over logical steps

click tile

declare temporary variables to represent corners relative to file
    use math to compare the positions on array

run function to compare the content of each corner to the event content
    if false, move on
   if true...

to go opposite direction
    record the direction of the corner relative to the evt
    have swtich statements that correspond the corner to its opposite
    compare that corner to the evt
        if true, win

to go same direction
    use variable to name that second square
    


assign corners related to that tile to varia


1/3 going through code. making comments for self

ctrl+k, ctrl, collapse text

NEW IDEA

js 
record the coordinates of the evt and a corner

if one duo is the same, assign variables to both
assign coordinates to both


assign direction based on orientation of that corner
	these will be your functions
	

topleft/bottom right	lefttoright
topright/bottomleft     righttoleft

each funtion checks corners based on coordinates given
if either of those corners shares a symbol with one of the first two, you win

try using entries() + for of loop to link the values of both the coordinates and thier textcontent

1/3

for of statements are loop multiple times per click. if I get any wonky values, that is why

console.log(CornerValue[0], CornerValue[1]) is functioning as expected

make sure whether im assigning variables or arrays

if statements to prevent errors





doing to the corners is fine
if i do to the middle, I get 

Array [ 0, 0 ]
tictactoe.js:242:14
Array [ -1, -1 ]
tictactoe.js:243:17
Uncaught TypeError: can't access property "-1", board[ExtendTopLeft[0]] is undefined

I need to have it scan the topleft AND the bottom right to solve this 


1/4

          board[ExtendTopLeft[0]] gives me an array
                 console.log(ExtendBottomRight); gives an integer

an issue with the for of statement is that it is only checking 1 corner at a time
I need to either store all possible corners 
ORRRR
I need to have a way to save a value and access it next loop

maybe use the content array
    make new variables, have them store value for a loop(s)?
    store the corner values and then alter based on those as opposed to the evt?

if two opposing corner contents are the same
    if so, you win

    if topleft and bottom right of evt be the same

if not...
    have the "extended varables be based on those

    topleft extended

    if evt, topleft and topleft extended are the same
    made error in array

I have all of the pieces. I can feel it.

I need

The current button's location noted
the current button's value noted
    these done instantly on event

each of that buttons corner locations noted
    PossibleCorners.entries()
each corner location value noted
    contentvalue


x top right corner strange results
    000 x01 011 x20


need to find way to check which way to run the algorithm

if both coordinates of one of the values > the other, topleft to bottom right
    else topright to bottomleft

coordinates does the evt, need the coordinates for the corner
then make 2 functions


1/5

for the coordinates, there are coordinates, and there is cornervalue


to get the if statement right

toplefttobottom right if 
    one of the values has both numbers being higher

    defining "firstvalue" vs "second value". is it be poition or by what is clicked in what order?
        so far its the later. is that best?


1/6

started using .map(). seems important in the future


I think I put too much code in  TopLeftToBottomRight() and not enough in TopRightToBottomLeft()

be careful of scopes

Firstvalue is the event
secondvalue is the corners

Do I need to actually do an if staement on which is first? could I just declare and check corners for both at once?


toplefttobottomright

    if 1st[0] < 2nd[0]
    let extendedtopleft = 1st[0-1] 1st[0-1]

    else
    let extendedtopleft = 2nd[0-1] 2nd[0-1]

    if 1st[0] > 2nd[0]
    let extendedbottomright = 1st[0+1] 1st[0+1]

    else
    let extendedbottomright = 2nd[0+1] 2nd[0+1]
    
!!!!!! BIG QUESTION
        should I declare the variables in a function in the beginning or near where they are used?

Need to declare variables better
    diferentiate between coordinates and textcontent more clearly

partial succseses
issues on both sides
    topltobottomr only allows in that direction, no other
    toprtobottoml is declaring it after 2 in a row

    trying bottom right doesnt lead to an "Uncaught TypeError: can't access property "-1", board[TopLeftExtendCoordinates[0]] is undefined" type error while 
    the other way around does


issues: 269, topleft coordinates. for some reason, exclusively the topleft corner is causing errors
        for the topright, there are victory declarations only 2 symbols long insteadf of 3
            exception, the bottom left has the same "-1 isnt defined" issue when the middle symbol is placed last

1/7

if (typeof TopRightExtendCoordinates !== "undefined" &&
TopRightExtendCoordinates)
this deals with stuff being falsy or if it exist. negative numbers are truthy
    now the issue is extended not working
        the possible issue is that it may interfere with the extended declaring
        if a hypothetical box is in the negatives, then it doesnt get delclared.

for whatever reason 
    CornerCoordinates and TopRightExtendCoordinates are identical. a lead!
    othe way is fine though

    bottomleft to top right is the only corner that isnt having a problem making it work on the third part
        adding BottomLeftExtendCoordinates >= 0 seems to have messed it up. suspicion. this restriction stopped the if statement from running


in regards to the usage of vairable >0 0 , it will stop useful code, if as a requirement, one of the third boxes has one of these values as a requirement. is it possible that these errors should be ignored instead of being dealt with?

when they are removied, toplefttobottom right benefits and bottomlefttotopright benefits

possibility: it has something to do with the negative x coordinates.

Uncaught TypeError: can't access property "-1", board[TopRightExtendCoordinates[0]] is undefinedUncaught 
TypeError: can't access property "-1", board[TopLeftExtendCoordinates[0]] is undefined

I added the contion to both of the right starting conditions. only the roptight has succceeded
could it be because the bottom right will need to deal with twicre as many negatives?

might need more negatives. but it would 
    topleft doesnt need. would need to understand more


1/8

Uncaught TypeError: can't access property 3, board[BottomRightExtendCoordinates[0]] is undefined

Making an extended value isnt working! tictactoe.js:345:19
O O undefined
trbl: no error shown


tlbr added
     && BottomRightExtendCoordinates >= 0 
    not the same as the other

what do the other ways do about this?

Discovery

&& TopLeftExtendCoordinates >= 0 
    tlbr Uncaught TypeError: can't access property 3, board[BottomRightExtendCoordinates[0]] is undefined
    and allowd brtl to run poperly
 && BottomRightExtendCoordinates >= 0 
    Uncaught TypeError: can't access property "-1", board[TopLeftExtendCoordinates[0]] is undefined
    amd a;;pwed tlbr to run properly
both existing cause
    undefined
neither cause
    tlbr fine
    brtl Uncaught TypeError: can't access property "-1", board[TopLeftExtendCoordinates[0]] is undefined


    its TopLeftExtendCoordinates[0] NOT TopLeftExtendCoordinates.
    big lesson: dont mix up strings and arrays


all work except trbl
it might have something to do with the return values
middle last woroks tlbr but not other way

success, needed to change the map() target.

just need to work on the middle last for trbl
    tlbr
            console.log("Inside Bottomright condition");
           ExtendedValue = board[BottomRightExtendCoordinates[0]][BottomRightExtendCoordinates[1]].textContent;
           console.log(ExtendedValue);
    this trbl
            Uncaught TypeError: can't access property "-1", board[BottomLeftExtendCoordinates[0]] is undefined

top rightextend and bottomleft extwns dont exist

the other algorith runs the wincon twice! need to contrast differences

      function TopLeftToBottomRight(Firstvalue, Secondvalue) {
        if (Firstvalue[0] < Secondvalue[0]) {
          TopLeftExtendCoordinates = Firstvalue.map((x) => x - 1);
          BottomRightExtendCoordinates = Secondvalue.map((x) => x + 1);
        } else if (Firstvalue[0] > Secondvalue[0]) {
          TopLeftExtendCoordinates = Secondvalue.map((x) => x - 1);
          BottomRightExtendCoordinates = Firstvalue.map((x) => x + 1);
        } else {
          console.log("There is an issue with extendcoordinates");
        }



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

I think I need to declare both things in both half of the if else statement

Success. That way I can have both sides be evaulated!

Now I need an end state.


Figured out the game!.

Now to add a reset button

1/8

I need to find a wy to make the reseting "stick"

The turn anncouncement isnt changing
the buttons do nothing
the board isnt reseting

the only thing is that it saus the turns are changing, but that has 0 practical effect

I managed to be able to reset the game, but I had not thouroughly enough tested the win cases. x[4] o[3] x[6] gave me a winconc for that
    only seems to be a problem for 
        trbl. check the win coordinates

event and top right are the same when trbl
tr amd corner same bltr

check the numners and targeting for the trbl function
    needed to swap around some pluses and minuses

design notes other online games

kenken

hovers over the button to be solected

usa tiday
    game takes up over 80 of screen
    there is deadspace at top and bottom
        noises when clicking
    the squares and background contrastinf colors
            technical buttons tertiary color
    an alert for a grats scree with states

    kenkenpuzzle
        no contrast between boxes and background but there ARE old, undivided lines

sudokuonline.org
    checkboard style color contrast
    title of site brightest color


...nvm about the testing, didnt test enough


https://mixkit.co/free-sound-effects/click/

have the turn sentence change based on the turn and have it not be static
make sure the reset button doesnt get pushed down

problems left. still that programming...
the size keeps changing

removed the size change. tested program again. problem gone...

I guess now I will go on to responsive design...this will be fairly easy


1/9/24 
OL
ipad
the turn announcement is uneven
more padding above the title


1/10

for popups make rest of the page toned color

1/13

install sass
make if statement for the blur
    be body, exclude the popup

I need to find a way to have the css for the blue exception to be run
    likely data attributes


tried removing stuff. the css code DOES work for the blur, its just the js overriding I need to worry about

announcementContainer need to fix that code

 announcementContainer.style.filter = 'blur(0px) !important';
doesnt override
  document.body.style.filter = 'blur(6px)'
because its a child

if parent is blurred, so must children

it may be better to just try to have darker tones for the background

maybe have the popup be a sibling somehow. they could be a problem for filter in general
overflow:hide bad practice

1/14 
Need to keep workin on the if statements for the button backgrounds during the start event

1/15

!global is good for very wide reaching if statements