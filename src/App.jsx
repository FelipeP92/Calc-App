// import 
import React, { useState } from 'react';
import Results from './components/Results';
import "./App.css"
import MathOperation from './components/MathOperation';
import Functions from './components/Funcitons';
import Numbers from './components/Numbers';




//generation of component

export const App = () => {

  const [result, setResult] = useState('');


    

  return (
    <div>
      <main className='react-calculator'>
        <Results value={result} />
        <Numbers onClickNumbers={number => {
           console.log(number)
           setResult(number)
        }}/>
        <Functions
          onContentClear={() => console.log('clear')}
          onDelete={() => console.log('delete')}
        />

        <MathOperation
          onClickOperation={operation => console.log('operation:', operation)}
          onClickEqual={equal => console.log('equal:', equal)} />

      </main>

    </div>
  )
};






//export

export default App