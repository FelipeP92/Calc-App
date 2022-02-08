/*eslint no-eval: 0 */
// import 
import React, { useState } from 'react';
import words from 'lodash.words'
import Results from './components/Results';
import "./App.css"
import MathOperation from './components/MathOperation';
import Functions from './components/Funcitons';
import Numbers from './components/Numbers';




//generation of component

export const App = () => {

  const [stack, setStack] = useState('');


  const items = words(stack, /[^-^+^*^/]+/g);
  

  const value = items.length > 0 ? items[items.length - 1] : 0



  return (
    <div>
      <main className='react-calculator'>
        <Results value={value} />
        <Numbers onClickNumbers={number => {
          console.log(number)
          setStack(`${stack}${number}`)
        }} />
        <Functions
          onContentClear={() => {
            console.log('clear')
            setStack('')
          }}
          onDelete={() => {
            if (stack.length > 0) {
              console.log('delete')
              const newStack = stack.substring(0, stack.length - 1)
              setStack(newStack)
            }
          }}
        />

        <MathOperation
          onClickOperation={operation => {
            console.log('operation:', operation)
            setStack(`${stack}${operation}`)
          }}
          onClickEqual={equal => {
            console.log('equal:', equal)
            setStack(eval(stack).toString())
          }} />

      </main>

    </div>
  )
};






//export

export default App