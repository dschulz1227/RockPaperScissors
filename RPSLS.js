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

        this.gesture = [];

        this.gesture.push(new Gestures(rock));
        this.gesture.push(new Gestures(paper));
        this.gesture.push(new Gestures(scissors));
        this.gesture.push(new Gestures(lizard));
        this.gesture.push(new Gestures(spock));

        
    }
}


class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
    }
}


class Gestures{
    constructor(){
        

    }
}