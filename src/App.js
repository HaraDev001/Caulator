import React, { PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import CalculatorPage from './pages/CalculatorP';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<CalculatorPage />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}

export default App;
