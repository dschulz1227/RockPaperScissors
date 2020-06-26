"use strict"



//*** allow variations of spelling/casing to gesture choices
//clean up code


class Game{
    constructor(){}
        
    RunGame(){   // main method
            this.PickPlayer();
            this.DisplayRules();
            console.log("These are the gestures you have to choose from: " + this.gestures);
        while(this.PlayerOne.score < 5 && this.PlayerTwo.score < 5){   
            this.PlayerOne.ChooseGesture();
            this.PlayerTwo.ChooseGesture();
            this.FindWinner();    
        }     
        if(this.PlayerOne.score === 5){
            this.DisplayWinner(this.PlayerOne.name);
        }
        else{
            this.DisplayWinner(this.PlayerTwo.name);
        }
}   
   
    PickPlayer(){
        let PlayerOption = prompt("Are you playing a friend or playing alone?", "Enter 'Alone' or 'Friend' ").toUpperCase();
        if(PlayerOption === "FRIEND"){
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
            alert("It's a Tie!");
            console.log("It's a tie!");
            
        }
        else if (this.PlayerOne.GestureChoice === 'ROCK' && this.PlayerTwo.GestureChoice === 'SCISSORS'){
            this.RoundWinner(this.PlayerOne.name);
            this.PlayerOne.score ++;
        }        
        else if(this.PlayerOne.GestureChoice === 'SCISSORS' && this.PlayerTwo.GestureChoice === 'PAPER'){
            this.RoundWinner(this.PlayerOne.name);
            this.PlayerOne.score ++;
        } 
        else if (this.PlayerOne.GestureChoice === 'PAPER' && this.PlayerTwo.GestureChoice === 'ROCK'){       
            this.RoundWinner(this.PlayerOne.name);
            this.PlayerOne.score ++;
        }
        else if(this.PlayerOne.GestureChoice === 'SPOCK' && this.PlayerTwo.GestureChoice === 'ROCK'){
            this.RoundWinner(this.PlayerOne.name);
            this.PlayerOne.score ++;
        }
        else if (this.PlayerOne.GestureChoice === 'LIZARD' && this.PlayerTwo.GestureChoice === 'PAPER'){
            this.RoundWinner(this.PlayerOne.name);
            this.PlayerOne.score ++;
        }
        else{
            this.RoundWinner(this.PlayerTwo.name);
            this.PlayerTwo.score ++;
        }          
        
    }



    DisplayWinner(matchWinner){
       
         alert(`${matchWinner} won this match!`);
         console.log(`${matchWinner} won this match!`);
    }
       
    
    DisplayRules() {
        console.log("RULES");
        console.log("Each player will choose a gesture");
        console.log("Whichever gesture wins, that player gets 1 point");
        console.log("First player to 5 point wins the game")
    }
     
    RoundWinner(roundWinner){
        alert(`${roundWinner} won this round!`);
        console.log(`${roundWinner} won this round!`);
    }


}


class Player{
    constructor(name){
        this.score = 0;
        this.name = name ;
        this.GestureChoice = "";
        this.gestures = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];
        
    }
    

    ChooseGesture(){
        
        let userChoose = prompt(`${this.name},Which gesture would you like to use?` ,  "Rock, Paper, Scissors, Lizard, or Spock").toUpperCase();
        this.GestureChoice = userChoose;
        
        
    }

}

class Computer extends Player {
    constructor(name){
       super("R2-D2");       
    }

    ChooseGesture(){ 
        
        this.GestureChoice = this.gestures[ Math.floor(Math.random() * this.gestures.length) ];
    }
 }


let game = new Game();
game.RunGame();

