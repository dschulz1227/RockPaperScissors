"use strict"





//differentiate between 
//Make a while loop until a player reaches 3 wins

class Game{
    constructor(){}
        
    RunGame(){   // main method
            this.PickPlayer();
            this.DisplayRules();
            this.PlayerOne.ChooseGesture();
            this.PlayerTwo.ChooseGesture();
            this.FindWinner()       
    }     
    
    PickPlayer(){
        let PlayerOption = prompt("Are you playing a friend or playing alone?", "Enter 'Alone' or 'Friend' ");
        if(PlayerOption === "Friend"){
            this.PlayerOne = new Player(prompt("Player one, enter your name"));
            this.PlayerTwo = new Player(prompt("Player two, enter your name"));
        }
        else{        
            this.PlayerOne = new Player (prompt("Player, enter your name"));
            this.PlayerTwo = new Computer();
        }
        return PlayerOption;
    }

    FindWinner(){
        if(this.PlayerOne.GestureChoice  ===  this.PlayerTwo.GestureChoice){
            console.log("It's a tie!")
        }
        else if (this.PlayerOne.GestureChoice === 'Rock' && this.PlayerTwo.GestureChoice === 'Scissors'){
            this.DisplayWinner();
            }        
        else if(this.PlayerOne.GestureChoice === 'Scissors' && this.PlayerTwo.GestureChoice === 'Paper'){
            this.DisplayWinner();
        } 
        else if (this.PlayerOne.GestureChoice === 'Paper' && this.PlayerTwo.GestureChoice === 'Rock'){       
            this.DisplayWinner();
        }
        else if(this.PlayerOne.GestureChoice === 'Spock' && this.PlayerTwo.GestureChoice === 'Rock'){
            this.DisplayWinner();
        }
        else if (this.PlayerOne.GestureChoice === 'Lizard' && this.PlayerTwo.GestureChoice === 'Paper'){
            this.DisplayWinner();
        }
        else{
            console.log("Player two wins this round!")
        }
        

          
    }


    //Want to make display winner function to log winner instead of typing "Console log winner" after each circumstance
    DisplayWinner(){
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
        this.GestureChoice = "";
        this.gestures = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    }
    
//need logic for "player one to choose" and "player two to choose"

    ChooseGesture(){
        let userChoose = prompt(`${this.name},Which gesture would you like to use? ,  "Rock, Paper, Scissors, Lizard, or Spock`)
        this.GestureChoice = userChoose;
    }

}


class Computer extends Player {
    constructor(){
       super("R2-D2");
        
    }

    ChooseGesture(){
        this.GestureChoice = this.gestures[Math.floor(Math.random()) * this.gestures.length]
    }
}



let game = new Game();
game.RunGame();


        


