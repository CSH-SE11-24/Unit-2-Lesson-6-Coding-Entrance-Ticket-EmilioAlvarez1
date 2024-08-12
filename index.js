// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let num = 56

// Prompt the user to guess the number
let guess = prompt("Guess the number")

// Cast the user input to a number
parseFloat(guess)


// Create a new variable called attempts and set it to 0
let attempts = 0 

// Create a while loop that runs while the user guess is not equal to your number
while(guess !== num ){
  if(attempts > 1 || guess !== num ){
    console.log("Not Quite")
    guess = prompt("Guess again")
    attempts = attempts + 1
    }else{
    console.log("Nice")
    }
  
}

// In the while loop, prompt the user to guess the number again (remember to cast)


// In the while loop, increase the attempts by 1


// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 

