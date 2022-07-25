import React from 'react';
import PropTypes from 'prop-types';

const showOutcome = (total, operation, next) => {
  let outcome = 0;
  if (total) {
    outcome = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    outcome = next;
  }
  return outcome;
};

const Displayed = ({ total, operation, next }) => (
  <div>
    <div id="result">{showOutcome(total, operation, next)}</div>
  </div>
);

Displayed.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Displayed;
