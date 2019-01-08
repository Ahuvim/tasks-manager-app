class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.takeOneTask = this.takeOneTask.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteThisOption = this.deleteThisOption.bind(this)
        this.state = {
            options : []
        };
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>{return {options: options};});
            }
        }catch(e){
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log("saving data");
        }
        
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    removeAllOptions(){
        this.setState(()=>{
            return{
                options : []
            };
        });
    }
    takeOneTask(){
        const randomNumber= Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }
    deleteThisOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }));
    }
    addOption(option){
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
    render() {
      const title = 'Tasks Manager';
      const subtitle = 'Order your tasks and do them';
      return (
        <div>
          <Header title={title} subtitle={subtitle} /> 
          <Action action = {this.takeOneTask} hasOptions={this.state.options.length} />
          <Options hasOptions={this.state.options.length} deleteThisOption={this.deleteThisOption} removeOptions={this.removeAllOptions} optionsArr={this.state.options} />
          <AddOption addOption={this.addOption} />
        </div>
      );
    }
  }


  const Header = (props) => {
      return (
        <div>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      
      );
  }
  

const Action = (props) =>{
    return (
        <div>
            <button onClick={props.action} disabled={!props.hasOptions}> What should I do?</button>
        </div>
    );
}

const Options = (props) => {
        return (
            <div>
                <button onClick={props.removeOptions} disabled={!props.hasOptions}>Remove all options</button>
                {props.optionsArr.length ===0 && <p>Please add a mission to do</p>}
                {props.optionsArr.map((option) => <Option deleteThisOption={props.deleteThisOption} key={option} option={option}/>)}
            </div>
        );
    }

const Option = (props) => {
        return (
            <div>
                {props.option}
                <button onClick={(e) => {props.deleteThisOption(props.deleteThisOption(props.option))}}>Remove</button>
            </div>
        );
    }


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.addFunction = this.addFunction.bind(this);
        this.state= {
            error: undefined
        };
    }
    addFunction(e){
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
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addFunction}>
                    <input type='text' name='mission'></input>
                    <button>Add to the list</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('root'))