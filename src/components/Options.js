import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>Your Options </h3>
            <button className='button button--link' onClick={props.removeOptions} disabled={!props.hasOptions}>Remove all options</button>
        </div>
        {props.optionsArr.length ===0 && <p className='widget-massage'>Please add a mission to do</p>}
        {props.optionsArr.map((option,index) => <Option deleteThisOption={props.deleteThisOption} count= {index+1}
        key={option} option={option}/>)}
        
        
    </div>
);

export default Options;