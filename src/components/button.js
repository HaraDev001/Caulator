import React from 'react';
import PropTypes from 'prop-types';

const setClass = (button) => {
  if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
    return 'operators';
  }

  if (button === '0') {
    return 'zero';
  }

  return button;
};

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Buttons = ({ event }) => (
  <div className="digits">
    {buttons.map((button) => (<button key={button} className={setClass(button)} onClick={event} type="button">{button}</button>))}
  </div>
);

Buttons.propTypes = {
  event: PropTypes.func.isRequired,
};

export default Buttons;
