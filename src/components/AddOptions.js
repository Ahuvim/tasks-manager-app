
import React from 'react';

export default  class AddOption extends React.Component{
    state= {
        error: undefined
    };
    addFunction = (e) => {
        e.preventDefault();
        // trime remove all the unneccery space
        const mission = e.target.elements.mission.value.trim();
        const error = this.props.addOption(mission)
        this.setState(()=>{
            return {
                error: error
            }; 
        });
        if(!error){ 
            e.target.elements.mission.value='';
        }
    };
    render(){
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className= 'add-option' onSubmit={this.addFunction}>
                    <input className= "add-option__input" type='text' name='mission'></input>
                    <button className='button'>Add to the list</button>
                </form>
            </div>
        );
    }
}