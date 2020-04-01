import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="logo">
          <h1>Dora Barker</h1>
        </section>
        <nav>
          <ul>
            <a href="/"><li>home</li></a>
            <li>social</li>
            <li>about</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
