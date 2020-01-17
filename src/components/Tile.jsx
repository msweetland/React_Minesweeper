import React from 'react';
import PropTypes from 'prop-types';
import MinesweeperTile from '../MineSweeper/MinesweeperTile';

class Tile extends React.Component {
  onLeftClick = (event) => {
    event.preventDefault();
    const { onLeftClick, row, col } = this.props;
    onLeftClick(row, col);
  }

  onRightClick = (event) => {
    event.preventDefault();
    const { onRightClick, row, col } = this.props;
    onRightClick(row, col);
  }

  render() {
    const { tile } = this.props;
    return (
      <button
        type="button"
        onClick={this.onLeftClick}
        onContextMenu={this.onRightClick}
        className="Tile"
      >
        <span>{tile.currentView()}</span>
      </button>
    );
  }
}

Tile.propTypes = {
  tile: PropTypes.instanceOf(MinesweeperTile).isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired
};

export default Tile;
