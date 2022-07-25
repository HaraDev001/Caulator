import React, { useState } from 'react';
import calculate from '../logic/calculator';
import '../logic/operate';
import Displayed from './display';
import Buttons from './button';
import './calculator.css';

const MyCalculator = () => {
  const [value, setValue] = useState({});

  const handleClick = (e) => {
    const outPut = e.target.innerText;
    const newContent = calculate(value, outPut);
    setValue(newContent);
  };

  const { next, total, operation } = value;

  return (
    <div className="container">
      <Displayed next={next} total={total} operation={operation} />

      <Buttons event={handleClick} />
    </div>
  );
};

export default MyCalculator;
