import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//First Component
class Square extends React.Component {
  //add constructor to initialize STATE
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button
      //Display current state's value when clicked
        className="square"
        onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

//Second Component
//Parent Component to Child Square Component
class Board extends React.Component {
  //Add constructor to set initial state to contain an array with 9 nulls corresponding to the 9 squares
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  //Modify to read from it, the squares array in the Board's constructor
  //Each Square will now recieve a value prop of X, O or null for empty squares
  //Maintain Board's privacy, function will get called when Square is clicked
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  //*split for readability, and added () so JS doesn't insert semicolon after return and break code

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//Third Component
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
