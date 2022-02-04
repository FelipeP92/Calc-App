// import 
import React from 'react';
import Results from './components/Results';
import "./App.css"

//generation of component

export const App = () => {
  return (
    <div>
      <main className='react-calculator'>
        <Results />
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="functions">
          <button>C</button>
          <button>R</button>
        </div>
        <div className="math-operations">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>=</button>
        </div>
      </main>

    </div>
  )
};





//export

export default App