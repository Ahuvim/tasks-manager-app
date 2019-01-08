import React from 'react';
import AddOption from './AddOptions.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined
    };
    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json);
            if(options){
                this.setState({options});
            }
        }catch(e){
            //do nothing at all
        }
    }
    componentDidUpdate = (prevProps,prevState) => {
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        
    }
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
    }
    removeAllOptions = ()=> {
        this.setState(()=>{
            return{
                options : []
            };
        });
    }
    takeOneTask = () => {
        const randomNumber= Math.floor(Math.random() * this.state.options.length);
        this.setState(()=>{
            return{
                selectedOption: this.state.options[randomNumber]
            };
        });
        console.log(this.state.options[randomNumber])
    }
    deleteThisOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }));
    }
    addOption = (option) => {
        // we will use concat method to combine between the pre options array and the new option without changing the preset
        if(!option){
            return 'Please enter a vaild option';
        }else if(this.state.options.indexOf(option)>-1 ){
            return 'Your mission is exist already';
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            };

        });
    }
    goButton = () => {
        
        this.setState(()=>{return{
            selectedOption : undefined};
        });
    }
    render() {
      const title = 'Tasks Manager';
      const subtitle = 'Order your tasks and do them';
      return (
        <div>
          <Header title={title} subtitle={subtitle} /> 
          <div className='container'>
            <Action action = {this.takeOneTask} hasOptions={this.state.options.length} />
            <div className='widget'>
                <Options hasOptions={this.state.options.length} deleteThisOption={this.deleteThisOption} removeOptions={this.removeAllOptions} optionsArr={this.state.options} />
                <AddOption addOption={this.addOption} />
            </div>
          </div>
          
          <OptionModal selectedOption={this.state.selectedOption} goButton={this.goButton}/>
        </div>
      );
    }
  }

  export default IndecisionApp;