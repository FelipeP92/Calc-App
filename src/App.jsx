// import 
import React from 'react';
import Results from './components/Results';
import "./App.css"
import Button from './components/Button';
import MathOperation from './components/MathOperation';


//generation of component

export const App = () => {


  const clickHandler = (text) => console.log(text)



  return (
    <div>
      <main className='react-calculator'>
        <Results value={"100"} />
        <div className="numbers">
          <Button text='1' clickHandler={clickHandler} />
          <Button text='2' clickHandler={clickHandler} />
          <Button text='3' clickHandler={clickHandler} />
          <Button text='4' clickHandler={clickHandler} />
          <Button text='5' clickHandler={clickHandler} />
          <Button text='6' clickHandler={clickHandler} />
          <Button text='7' clickHandler={clickHandler} />
          <Button text='8' clickHandler={clickHandler} />
          <Button text='9' clickHandler={clickHandler} />
          <Button text='0' clickHandler={clickHandler} />

        </div>
        <div className="functions">
          <button>C</button>
          <button>R</button>
        </div>
        <div className="math-operations">
          <MathOperation 
          onClickOperation = {operation => console.log('operation:', operation)}
          onClickEqual = {equal => console.log ('equal:',equal)}/>
        </div>
      </main>

    </div>
  )
};






//export

export default App