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
        this.displayRules();
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        
        
    }
        
    findWinner(){
        if(this.playerOne.chooseGesture) === (this.playerTwo.chooseGesture){
            console.log("It's a tie!")
        }
        else if (this.playerOne.chooseGesture === 'Rock' && this.playerTwo.chooseGesture === 'Scissors'){
            // console.log("Player One wins this round!")
            this.displayWinner();
            }
        
        else if(this.playerOne.chooseGesture === 'Scissors' && this.playerTwo.chooseGesture === 'paper'){
            console.log("Player One wins this round.")
            this.displayWinner();
        } 

        else if (this.playerOne.chooseGesture === 'Paper' && this.playerTwo.chooseGesture === 'Rock'){
            console.log("Player One wins this round");
            this.displayWinner();
        }

        else if(this.playerOne.chooseGesture === 'Spock' && this.playerTwo.chooseGesture === 'Rock'){
            console.log("Player One wins this round.")
            //does this below need to be this.displayerWinner??
            this.displayWinner();

        }
        

          
    }


    //Want to make display winner function to log winner instead of typing "Console log winner" after each circumstance
    displayWinner(){
        console.log("")
    }
       
    
    displayRules() {
        console.log("these are the rules!");
        console.log("Each player will choose a gesture");
        console.log("Whichever gesture wins, that player gets 1 point");
        console.log("First player to 5 point wins the game")
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
        return computerSelection;
    }
}



let game = new Game();
game.runGame();


        


