
import React from 'react';

const Option = (props) => (
    <div className='option'>
        <div className="option--data">
                <p className='option-number'>{props.count} </p>
                <p className='option--text'> {props.option}</p>
        </div>
        <button className='button button--link' onClick={(e) => {props.deleteThisOption(props.deleteThisOption(props.option))}}>Remove</button>
    </div>
);

export default Option; 