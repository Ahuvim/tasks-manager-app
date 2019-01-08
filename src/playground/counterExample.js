class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount(){

        const count = parseInt(localStorage.getItem("count",this.state.count),10);
        this.setState(()=>({count}));
    }
    componentDidUpdate(preState){
        if(preState.count != this.state.count){
            localStorage.setItem("count",this.state.count)
            console.log("Update");
        }
        
    }
    addOne(){
        this.setState((preState) => {
            return{
                count :preState.count + 1
            };
        });
    }
    minusOne(){
        this.setState((preState) => {
            return{
                count :preState.count - 1
            };
        });
    }
    reset(){
        this.setState(() => {
            return{
                count :0
            };
        });
    } 
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));








// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('root');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
