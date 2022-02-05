import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';


//DRY dont repeat 

const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButton = onClickNumbers => {
   //<Button text='1' clickHandler={onClickNumbers} />

   return numbers.map(number => (
    <Button key={number} text={number.toString()} clickHandler={onClickNumbers} />
   ))
}


const Numbers = ({ onClickNumbers }) => (
  <section className='numbers'>
    {renderButton(onClickNumbers)}
  </section>
);

Numbers.propTypes = {
  onClickNumbers: PropTypes.func.isRequired

}

export default Numbers;
