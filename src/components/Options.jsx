import React from 'react';
import PropTypes from 'prop-types';

class Options extends React.Component {
  onNewGame = (event) => {
    event.preventDefault();
    const { onNewGame } = this.props;
    onNewGame();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.onNewGame}
          className="Options-Button"
        >
          <h3>New Game</h3>
        </button>
      </div>
    );
  }
}

Options.propTypes = {
  onNewGame: PropTypes.func.isRequired,
};

export default Options;
