class MinesweeperTile {
  constructor() {
    // game variables
    this.hasBomb = false;
    this.hasBeenVisited = false;
    this.clue = false;

    this.showFlag = false;
    this.showBomb = false;
    this.showClue = false;
    this.showWin = false;
  }

  currentView() {
    if (this.showWin) {
      return '🔥';
    }

    if (this.hasBeenVisited) {
      return '👍';
    }

    if (this.showBomb) {
      return '💣';
    }

    if (this.showFlag) {
      return '🚩';
    }

    switch (this.clue) {
      case 8:
        return '8️⃣';
      case 7:
        return '7️⃣';
      case 6:
        return '6️⃣';
      case 5:
        return '5️⃣';
      case 4:
        return '4️⃣';
      case 3:
        return '3️⃣';
      case 2:
        return '2️⃣';
      case 1:
        return '1️⃣';
      default:
        return '⬜';
    }
  }

  placeBomb() {
    this.hasBomb = true;
  }

  removeBomb() {
    this.hasBomb = false;
  }

  toggleFlag() {
    if (!this.hasBeenVisited) {
      this.showFlag = !this.showFlag;
    }
  }

  toggleBomb() {
    this.showBomb = !this.showBomb;
  }

  toggleWin() {
    this.showWin = !this.showWin;
  }

  markVisited() {
    this.hasBeenVisited = true;
  }

  unmarkVisited() {
    this.hasBeenVisited = false;
  }
}

export default MinesweeperTile;
