"use strict"

//two player game- PvP or PvC

//class for Player, Gestures, Game
//5 different gesture options
    //computer will generate random gesture
    //Players will choose gesture via "prompt"


//As a developer,I want to store all ofthe gesture options/choices in an array.
//I want to find a way to utilize the array of gestures within my code (display gesture options, assign player a gesture,etc).

class Game{
    constructor(){
        this.playerOne = new Player ("Damon");
        this.playerTwo = new Player ("Steve");
    }
    runGame(){   // main method
        this.displayRules;
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        this.rules = "Each player will choose a gesture, whomever's gesture is dominant will win the round. Whoever wins 2 out of 3 rounds is the ultimate RPSLP champion"
        
    findWinner(){
        if(this.playerOne.chooseGesture) === (this.playerTwo.chooseGesture){
            console.log("It's a tie!")
        }
        else if {this.playerOne.chooseGesture === 'Rock' && this.playerTwo.chooseGesture === 'Scissors'){
            // console.log("Player One wins this round!")
            displayWinner()
            }
        }   
    }


    }
    displayWinner(playerOne.userInput, playerTwo.userInput){
       if(this.playerOne.chooseGesture > this.playerTwo,chooseGesture){

       }

    displayRules() {
        console.log("these are the rules!");
    }
        
}



class Player{
    constructor(name, userInput){
        this.score = 0;
        this.name = name;
        this.gestureChoice = userInput;
        this.gestures = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
    }
    chooseGesture(){
        let userInput = prompt("Which gesture would you like to use?".  "Rock, Paper, Scissors, Lizard, or Spock")
        return userInput;
    }

}


class Computer extends Player {
    constructior(){
        let computerSelection = gestures[Math.floor(Math.random()) * this.gestures.length]
        console.log(computerSelection)
    }
}





        


