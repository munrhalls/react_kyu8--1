import React from 'react';
import ReactDOM from 'react-dom';
//Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
// always big letter

function App() {
  return (
    <main>
      Hello world!
    </main>
  )
}

function SecondApp() {
  return (
    <div>
    <br />
      Second app, hello world from there, ha!
    </div>
  )
}

function ThirdApp() {
  return (<div>
    'Hi. I'm the third app rendered and..THE ONLY ONE!!!
  </div>)
}

ReactDOM.render((<App />, <SecondApp />), document.getElementById('root'));
ReactDOM.render(<ThirdApp />, document.getElementById('root'));

