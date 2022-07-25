import React from 'react';
import MyCalculator from '../components/calculator';
import './Style.css';

const CalculatorPage = () => (
  <div className="calculatorarea">
    <div className="calculator-title">
      <h2>Let`s do some math!</h2>
    </div>
    <div className="mycalculator">
      <MyCalculator />
    </div>
  </div>
);

export default CalculatorPage;
