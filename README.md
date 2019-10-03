# bill-split-calculator
Iffy
Introduction
Today you're going to make a little node app that can take in user input and spit out appropriate output. All on the command line. Because we're all ninjas now!

Objectives
After completing this assignment, you will be able to:

Parse command line text to find the arguments you want.
Format those arguments if need be.
Use if/else/else-if statements to branch your code.
Output text back to the user.
The Basics
You'll be making a node app that uses process.argv to take in input and console.log to provide output. And you get to pick what it does! There are some suggestions below, but you can absolutely do something else. We'll be presenting these, so put your best foot forward!

If you need a reminder how to use process.argv, remember that we can use indices to grab different parts of it. Every space-separated string the user writes after node [filename].js will be there, starting at index 2. (Index 0 is the string 'node' and index 1 is the string containing your filename.) Importantly, they'll all come in as strings, so if you want booleans or numbers, you'll have to do conversion of one kind or another!

Some Possible Apps To Make
Please feel free to use these as jumping off points to something else or to more extended versions of these! In fact, please make the best, most feature-filled version of whatever you're doing. Now and always. Please and thank you

Guessing Game
It takes in two numbers, a max and a guess. It calculates a random integer from 1 to the max (check out Math.random()!) and then checks it against the guess made, returning whether the user guessed right or not!

Converter
The easy version of this is fahrenheit and celsius converters we made. The middle option is one that can take in as a separate argument the direction the conversion is going--are we converting to fahrenheit or celsius? The great app could convert not just temperature, but weight, size, length, etc. Then you would need a third argument--what are you converting from? With celsius/fahrenheit it's always the other one, but we could even convert from or to degrees kelvin, and there are many, many different units of length. Do as much as you can!


Basic Calculator
This one takes in two numbers and an operation and performs that operation on those numbers. The four basic arithmetic operations are good, but make sure to throw mod in there. Some quick notes on this one:

Think about how YOU would want to use a command line calculator. Make it as user-friendly as possible! What ways could someone ask a computer to add two numbers? How many of those ways should you consider?
DON'T USE EVAL. Some solutions you might duck on this will tell you to use eval. It's not only the easy way out that won't teach you anything about branching logic, but it's actually a hugely problematic JavaScript function from a security standpoint.
Other Ideas
Run anything else you want to do by us! As long as it's not absurdly easy or unrealistically time-consuming, we'll probably okay it.

Excelsior!