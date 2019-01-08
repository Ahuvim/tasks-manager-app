import React from 'react';

const Action = (props) =>(
    <div>
        <button className='big_button' onClick={props.action} disabled={!props.hasOptions}> What should I do?</button>
    </div>
)

export default Action;