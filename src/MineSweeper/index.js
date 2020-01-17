import MinesweeperTile from './MinesweeperTile';

class Minesweeper {
  constructor(numRows, numCols, percentBombs = 0.15) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.numBombs = Math.ceil(numRows * numCols) * percentBombs;
    // this.numFlagsUsed = 0;
    this.moves = 0;
    this.isGameOver = false;
    this.board = Array.from({ length: numRows }, () => {
      return Array.from({ length: numCols }, () => new MinesweeperTile());
    });
    this.placeBombs(this.numBombs - 1);
  }

  getBoard = () => this.board;

  getGameStats = () => ({
    moves: this.moves,
    isGameOver: this.isGameOver
  });

  endGame = () => {
    this.isGameOver = true;
    this.board.forEach((row) => {
      row.forEach(tile => {
        if (tile.hasBomb) {
          tile.toggleBomb();
        }
      });
    });
  };

  winGame = () => {
    this.isGameOver = true;
    this.board.forEach(row => {
      row.forEach(tile => {
        if (tile.hasBomb) {
          tile.toggleWin();
        }
      });
    });
  }

  placeBombs(bombsToPlace) {
    let n = bombsToPlace;
    while (n > 0) {
      const ranRow = Math.floor(Math.random() * (this.numRows - 0));
      const ranCol = Math.floor(Math.random() * (this.numCols - 0));
      const tile = this.board[ranRow][ranCol];
      if (!tile.hasBomb && !tile.hasBeenVisited) {
        tile.placeBomb();
        n -= 1;
      }
    }
  }

  primaryMove(row, col) {
    const tile = this.board[row][col];
    if (this.isGameOver || tile.hasBeenVisited || !this.isPlacesToMove()) {
      return this.board;
    }

    // check mark tile on click
    if (this.moves === 0 && tile.hasBomb) {
      tile.removeBomb();
      this.placeBombs(1);
      this.search(row, col);
    } else if (tile.hasBomb) {
      this.endGame();
    } else {
      this.search(row, col);
    }

    this.moves += 1;

    if (!this.isPlacesToMove()) {
      this.winGame();
    }

    console.log(tile);
    return this.board;
  }

  secondaryMove(row, col) {
    if (!this.isGameOver) {
      const tile = this.board[row][col];
      tile.toggleFlag();
    }
    return this.board;
  }

  search = (originRow, originCol) => {
    // if neighbor has bomb stop and count set clue else add neighbors to stack
    const stack = [];
    stack.push([originRow, originCol]);
    while (stack.length > 0) {
      const coords = stack.pop();
      const row = coords[0];
      const col = coords[1];
      const tile = this.board[row][col];
      const tilesAround = [];

      // top left
      if (row - 1 >= 0 && col - 1 >= 0) {
        tilesAround.push([row - 1, col - 1]);
      }

      // top
      if (row - 1 >= 0) {
        tilesAround.push([row - 1, col]);
      }

      // top right
      if (row - 1 >= 0 && col + 1 < this.numCols) {
        tilesAround.push([row - 1, col + 1]);
      }

      // right
      if (col + 1 < this.numCols) {
        tilesAround.push([row, col + 1]);
      }

      // bottom right
      if (row + 1 < this.numRows && col + 1 < this.numCols) {
        tilesAround.push([row + 1, col + 1]);
      }

      // bottom
      if (row + 1 < this.numRows) {
        tilesAround.push([row + 1, col]);
      }

      // bottom left
      if (row + 1 < this.numRows && col - 1 >= 0) {
        tilesAround.push([row + 1, col - 1]);
      }

      // left
      if (col - 1 >= 0) {
        tilesAround.push([row, col - 1]);
      }

      const numBombs = tilesAround.reduce((acc, [nextRow, nextCol]) => {
        const nextTile = this.board[nextRow][nextCol];
        if (!nextTile.hasBeenVisited && nextTile.hasBomb) {
          return acc + 1;
        }
        return acc;
      }, 0);

      if (numBombs > 0) {
        tile.clue = numBombs;
      } else {
        tile.markVisited();
        tilesAround.forEach(([nextRow, nextCol]) => {
          const nextTile = this.board[nextRow][nextCol];
          if (!nextTile.hasBeenVisited) {
            stack.push([nextRow, nextCol]);
          }
        });
      }
    }
  };

  isPlacesToMove = () => {
    for (let row = 0; row < this.numRows; ++row) {
      for (let col = 0; col < this.numRows; ++col) {
        const tile = this.board[row][col];
        if (!tile.clue && !tile.hasBomb && !tile.hasBeenVisited) {
          return true;
        }
      }
    }
    return false;
  }
}

export default Minesweeper;
