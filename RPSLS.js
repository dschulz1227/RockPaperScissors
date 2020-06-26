"use strict"

//*** Computer class picks 'rock' everytime
//*** Display name of winner after one player wins 5 rounds --> line 71 maybe "ALERT" name of winner
//*** allow variations of spelling/casing to gesture choices


class Game{
    constructor(){}
        
    RunGame(){   // main method
            this.PickPlayer();
            this.DisplayRules();
        while(this.PlayerOne.score < 5 && this.PlayerTwo.score < 5){   
            this.PlayerOne.ChooseGesture();
            this.PlayerTwo.ChooseGesture();
            this.FindWinner();    
        }     
        this.DisplayWinner();
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
            alert("It's a Tie!");
            console.log("It's a tie!");
            
        }
        else if (this.PlayerOne.GestureChoice === 'Rock' && this.PlayerTwo.GestureChoice === 'Scissors'){
            alert("Player One wins this round!");
            console.log("Player one wins this round!");
            this.PlayerOne.score ++;
        }        
        else if(this.PlayerOne.GestureChoice === 'Scissors' && this.PlayerTwo.GestureChoice === 'Paper'){
            alert("Player One wins this round!");
            console.log("Player one wins this round!");
            this.PlayerOne.score ++;
        } 
        else if (this.PlayerOne.GestureChoice === 'Paper' && this.PlayerTwo.GestureChoice === 'Rock'){       
            alert("Player One wins this round!");
            console.log("Player one wins this round!");
            this.PlayerOne.score ++;
        }
        else if(this.PlayerOne.GestureChoice === 'Spock' && this.PlayerTwo.GestureChoice === 'Rock'){
            alert("Player One wins this round!");
            console.log("Player one wins this round!");
            this.PlayerOne.score ++;
        }
        else if (this.PlayerOne.GestureChoice === 'Lizard' && this.PlayerTwo.GestureChoice === 'Paper'){
            alert("Player One wins this round!");
            console.log("Player one wins this round!");
            this.PlayerOne.score ++;
        }
        else{
            this.RoundWinner();
            
            // alert("Player Two wins this round!");
            // console.log("Player two wins this round!");
            this.PlayerTwo.score ++;
        }          
        
    }


    //Want to make display winner function to log winner instead of typing "Console log winner" after each circumstance
    DisplayWinner(){
        console.log(`${this.name} you have won the match!`)
    }
       
    
    DisplayRules() {
        console.log("RULES");
        console.log("Each player will choose a gesture");
        console.log("Whichever gesture wins, that player gets 1 point");
        console.log("First player to 5 point wins the game")
    }
     
    RoundWinner(){
        alert(`${this.player} won this round!`);
        console.log(`${this.player} won this round!`);
    }


}


class Player{
    constructor(name){
        this.score = 0;
        this.name = name ;
        this.GestureChoice = "";
        this.gestures = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        
    }
    

    ChooseGesture(){
        // console.log(this.gestures);
        let userChoose = prompt(`${this.name},Which gesture would you like to use? ,  "Rock, Paper, Scissors, Lizard, or Spock`)
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

