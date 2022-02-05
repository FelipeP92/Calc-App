import React from 'react';
import Button from './Button/Button';
import PropTypes from 'prop-types'


const MathOperation = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        <Button text='+' clickHandler={onClickOperation} />
        <Button text='-' clickHandler={onClickOperation} />
        <Button text='*' clickHandler={onClickOperation} />
        <Button text='/' clickHandler={onClickOperation} />
        <Button text='=' clickHandler={onClickEqual} />
    </section>
);

MathOperation.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperation;
