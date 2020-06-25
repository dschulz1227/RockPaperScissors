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
        RunGame(){   // main method
            this.PickPlayer();
            this.DisplayRules();
            this.PlayerOne.ChooseGesture();
            this.PlayerTwo.ChooseGesture();
            this.FindWinner()       
        }
    }     
    
    PickPlayer(){
        let PlayerOption = prompt("Are you playing a friend or playing alone?", "Enter 'Alone' or 'Friend' ");
        if(PlayerOption === "Friend"){
            this.PlayerOne = new Player("John");
            this.PlayerTwo = new Player();
        }
        else{        
            this.PlayerOne = new Player ("Damon");
            this.PlayerTwo = new Computer();
        }
        return PlayerOption;
    }

    FindWinner(){
        if(this.PlayerOne.gestureChoice  ===  this.PlayerTwo.gestureChoice){
            console.log("It's a tie!")
        }
        else if (this.PlayerOne.gestureChoice === 'Rock' && this.PlayerTwo.ChooseGesture === 'Scissors'){
            // console.log("Player One wins this round!")
            this.displayWinner();
            }
        
        else if(this.PlayerOne.ChooseGesture === 'Scissors' && this.PlayerTwo.ChooseGesture === 'Paper'){
            
            this.displayWinner();
        } 

        else if (this.PlayerOne.ChooseGesture === 'Paper' && this.PlayerTwo.ChooseGesture === 'Rock'){
           
            this.displayWinner();
        }

        else if(this.PlayerOne.ChooseGesture === 'Spock' && this.PlayerTwo.ChooseGesture === 'Rock'){
            
            //does this below need to be this.displayerWinner??
            this.displayWinner();

        }
        else if (this.PlayerOne.ChooseGesture === 'Lizard' && this.PlayerTwo.ChooseGesture === 'Paper'){
            this.displayWinner();
        }
        

          
    }


    //Want to make display winner function to log winner instead of typing "Console log winner" after each circumstance
    displayWinner(){
        console.log("You have won this round!")
    }
       
    
    DisplayRules() {
        console.log("these are the rules!");
        console.log("Each player will choose a gesture");
        console.log("Whichever gesture wins, that player gets 1 point");
        console.log("First player to 5 point wins the game")
    }
     
}


class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gestureChoice = "";
        this.gestures = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
    }
    
//need logic for "player one to choose" and "player two to choose"

    ChooseGesture(){
        let userChoose = prompt("Which gesture would you like to use?" ,  "Rock, Paper, Scissors, Lizard, or Spock")
        this.gestureChoice = userChoose
    }

}


class Computer extends Player {
    constructior(){
       super("R2-D2");
        
    }

    ChooseGesture(){
        this.gestureChoice = gestures[Math.floor(Math.random()) * this.gestures.length]
    }
}



let game = new Game();
game.runGame();


        


