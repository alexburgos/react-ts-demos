import React from 'react';
import './App.css';

import Timer from './Timer';
import Counter from './Counter';
import SetName from './SetName';
import InputFocus from './InputFocus';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Learning TypeScript + React Hooks! </h1>
        <div>
          <h3>Timer: </h3>
          <Timer count={0} />
        </div>

        <div>
          <h3>Count with buttons: </h3>
          <Counter />
        </div>

        <div>
          <h3>Set window name: </h3>
          <SetName />
        </div>

        <div>
          <h3>Focus on Input: </h3>
          <InputFocus/>
        </div>
      </header>

      <footer className="App-footer">
        Build with ❤ using Create React app.
      </footer>
    </div>
  );
}

export default App;
