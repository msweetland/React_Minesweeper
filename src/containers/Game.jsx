import React from 'react';
import Minesweeper from '../MineSweeper';
import Tile from '../components/Tile';
import Options from '../components/Options';

class Game extends React.Component {
  constructor() {
    super();
    this.game = new Minesweeper();
    this.state = {
      board: this.game.getBoard(),
    };
  }

  onNewGame = (height = 16, width = 16, percentBombs = 0.15) => {
    this.game = new Minesweeper(height, width, percentBombs);
    const board = this.game.getBoard();
    this.setState({ board });
  }

  onMovePrimary = (row, col) => {
    const board = this.game.primaryMove(row, col);
    const { isWinner } = this.game.getGameStats();
    this.setState({ board, isWinner });
  }

  onMoveSecondary = (row, col) => {
    const board = this.game.secondaryMove(row, col);
    this.setState({ board });
  }

  render() {
    const { board, isWinner } = this.state;
    return (
      <div className="Presentation">
        <h1>{isWinner ? 'You Win!' : 'Emojisweeper'}</h1>
        <Options onNewGame={this.onNewGame} />
        <div>
          {board.map((row, rowIdx) => (
            <div className="Row">
              {row.map((tile, colIdx) => (
                <Tile
                  tile={tile}
                  row={rowIdx}
                  col={colIdx}
                  key={`tile_${rowIdx * 1}_${colIdx * 1}`}
                  onLeftClick={this.onMovePrimary}
                  onRightClick={this.onMoveSecondary}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
