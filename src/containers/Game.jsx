import React from 'react';
import Minesweeper from '../MineSweeper';
import Tile from '../components/Tile';

class Game extends React.Component {
  constructor() {
    super();
    const defaultHeight = 20;
    const defaultWidth = 20;
    this.game = new Minesweeper(defaultHeight, defaultWidth);
    this.state = {
      board: this.game.getBoard(),
      // height: defaultHeight,
      // width: defaultWidth
    };
  }

  onNewGame = (event) => {
    event.preventDefault();
    this.game = new Minesweeper(20, 20);
    const board = this.game.getBoard();
    this.setState({ board });
  }

  onMovePrimary = (row, col) => {
    const board = this.game.primaryMove(row, col);
    this.setState({ board });
  }

  onMoveSecondary = (row, col) => {
    const board = this.game.secondaryMove(row, col);
    this.setState({ board });
  }

  render() {
    const { board } = this.state;
    return (
      <div>
        <h2>Emojisweeper</h2>
        <div>
          <button type="button" onClick={this.onNewGame}>
            New Game
          </button>
        </div>
        <div>
          {board.map((row, rowIdx) => (
            <div>
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
