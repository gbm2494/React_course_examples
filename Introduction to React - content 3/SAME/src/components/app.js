import React, { Component } from 'react';
import Game from './game';
import GameOver from './gameOver';
import GameWin from './gameWin';
import Score from './score';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      totalRows : 10,
      totalColumns : 10,
      gameData : [],
      end : 0,
      points : 0
    };

    //best way to save component from performance issues
    this.loadGameData = this.loadGameData.bind(this);
    console.log(this.state.points);
  }

  /*Method to load component data after component was mounted */
  componentDidMount(){
    this.setState({gameData : this.loadGameData()});
  }

  /*Method to load data for the game*/
  loadGameData(){
    var gameNumbers = [];
    var memory = [];

    //iterate every data position of the game and adds a value that represents an specific color
    for(var i = 0; i < this.state.totalRows; i++){
      for(var j = 0; j < this.state.totalColumns; j++){

        var variable = Math.floor((Math.random() * 5) + 1);

        memory.push(variable);
    }
      gameNumbers.push(memory);
      memory = [];
    }
    return gameNumbers;
  }

  /*Play game in a specific row and column*/
  playGame(row, column){
    var result = this.state.gameData;
    var color=result[row][column];
    var points = 0;

    //If user clicks on a screen section that doesn't belongs to game
    if (color == 0){
      points = 0;
    }
    else{
      //player has more than one position to eat
      points = this.playGameRecursive(row, column);

      //if user only eats on one position it can't take the point
      if (points == 1){
        result[row][column]=color;
        points = 0;
      }
      else{

        var total = this.state.points;
        total = total + (points * (points - 1))/2;
        //after eating, data has to be reassigned in the interface
        this.setState({
          gameData : result,
          points : total
        });
        this.moveRows(0);
        this.moveColumns(0);
      }
    }

    this.finishGame();
  }

  /*Play game recursive*/
  playGameRecursive(row, column){
    var total = 1;
    var result = this.state.gameData;
    const {totalRows, totalColumns} = this.state;
    var color = result[row][column];
    result[row][column]=0;

    //Right
    if(row < totalRows && column + 1 < totalColumns && row >= 0 && column+1 >= 0 && result[row][column+1] == color){
      total = total + this.playGameRecursive(row, column+1);
    }
    //Top
    if(row-1 < totalRows && column < totalColumns && row-1 >= 0 && column >= 0 && result[row-1][column] == color)
    {
      total = total + this.playGameRecursive(row-1,column);
    }
    //Left
    if(row < totalRows && column-1 < totalColumns &&row >= 0 && column-1 >= 0 && result[row][column-1] == color)
    {
      total = total + this.playGameRecursive(row,column-1);
    }
    //Bottom
    if(row+1 < totalRows && column < totalColumns && row+1 >= 0 && column >= 0 && result[row+1][column] == color)
    {
      total = total + this.playGameRecursive(row+1,column);
    }
    return total;
  }

  /*Method to move values to top positions on the data structure*/
  moveRows(n){
    const {totalRows, totalColumns} = this.state;
    var counter = 0;
    var color;
    var valor;
    var result = this.state.gameData;

    for (var j = 0; j < totalColumns; j++){
    valor = totalRows - 1;

    //Checks the column
    while (valor >= 0){
      //If the position has the same value than the value that I want to move to top I have to increment the counter
      if (result[valor][j] == n){
        counter = counter + 1;
        valor = valor - 1;
      }
      //If the position has a different value than the value I want to move to top I have to move this position value
      //to bottom counter times
      else{
       color = result[valor][j];
       valor = valor + counter;
       result[valor][j] = color;
       valor = valor - counter;
       valor = valor - 1;
      }
    }

    //I pass the value I want to move to top counter times
    for(var r = 0; r < counter; r++){
      result[r][j] = n;
    }
    counter = 0;
    }

    //I set the game data to current data values
    this.setState({
      gameData : result,
    });
  }

  /*Method to move columns to right when all values on this column are the same*/
  moveColumns(n){
    const {totalRows, totalColumns} = this.state;
    var color;
    var counter = 0;
    var row = totalRows - 1;
    var column = 0;
    var result = this.state.gameData;

    while(column < totalColumns){
    //if to check how many columns have the same values on all their positions
     if(result[totalRows-1][column] == n)
     {
       counter = counter + 1;
     }
     else{
       while(row >= 0){
         color = result[row][column];
         column = column - counter;
         result[row][column] = color;
         column = column + counter;
         row = row - 1;
       }
       row = totalRows - 1;
     }
     column = column + 1;
    }

    //for to move all values for columns that were moved
    for (var j = totalColumns - counter; j < totalColumns; j++){
      for(var i = 0; i < totalRows; i++){
        result[i][j]=n;
      }
    }

    this.setState({
      gameData : result,
    });
  }

  //Method to check if there is a possibility to continue playing
  finishGame(){
   const {totalRows, totalColumns} = this.state;
   var resultsData = this.state.gameData;
   var column = 0;
   var row = totalRows - 1;
   var color = resultsData[row][column];
   var result = 1;
   var cont;

   if (color == 0){
     result = 2;
   }

   while(column < totalColumns && result == 1){
      cont = this.finishGameColumn(column);
      //if method returns zero user can continue playing
      if(cont == 0){
         result = 0;
      }
      else if(cont == 1){
        //if finishGameColumn returns 1 I have to verify next column to check if entire game finished
         column = column + 1;
      }
  }

   this.setState({end : result});

   return result;
  }

  //Method to check is the game finished
  finishGameColumn(column){
    const {totalRows, totalColumns} = this.state;
    var resultsData = this.state.gameData;
    var color;
    var row = totalRows - 1;
    var result = 1;
    var result1 = 0;

    while(row >= 0 && column < totalColumns && result == 1 && result1 == 0){
      color = resultsData[row][column];
      if (color == 0){
        result = 1;
        result1 = 1;
      }
      //if position value is different to zero
      else{
        //checks right position
        column = column + 1;
        if(column < totalColumns && color == resultsData[row][column]){
          result = 0;
        }
        else{
          //checks top position
          column = column - 1;
          row = row - 1;

          if(row >= 0 && color == resultsData[row][column]){
            result = 0;
          }
        }
      }
   }
   return result;
}

  render() {
    return (
      <div className="game">
        <h1>SAME Game</h1>
        <Score score={this.state.points}/>
        {
          this.state.end === 0 ? <Game data={this.state.gameData} play={this.playGame.bind(this)} end={this.end}/> :
          this.state.end === 1 ? <GameOver points={this.state.points} /> : <GameWin points={this.state.points + 1000}/>
        }

      </div>
    );
  }
}
