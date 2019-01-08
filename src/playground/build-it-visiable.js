console.log('App.js is running!');
let appRoot = document.getElementById("root");
let boolVisibale =  true;
const switchBool = () => {
    boolVisibale = !boolVisibale;
    renderMissionApp();
    console.log(boolVisibale);
};
const renderMissionApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            {boolVisibale && <button onClick={switchBool}>show details</button>}
            {!boolVisibale && <button onClick={switchBool}>hide details</button>}
            {!boolVisibale && <p>hey. These are some details you can now see!</p>}
        </div>
        );
        
    ReactDOM.render(template,appRoot);
};

renderMissionApp();