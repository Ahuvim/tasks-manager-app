console.log('App.js is running!');
let appRoot = document.getElementById("root");

// JSX - JavaScript XML
// appliction object
const app ={
    title: "Task Manager",
    sub_title: "ordering your tasks for you!",
    options: []
};
const renderMissionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.sub_title && <p>{app.sub_title}</p>}
            <button disabled={app.options.length == 0} onClick={randomMission}>What should I do first?</button>
            <button onClick={removeFunction}>Remove Missions</button>
            <p>{app.options.length > 0? "Here are your options":"No options"}</p>
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="mission"></input>
                <button>Add mission</button>
            </form>
        </div>
        );
        
    ReactDOM.render(template,appRoot);
};
const randomMission = () => {
    const randomNumber= Math.floor(Math.random() * app.options.length);
    console.log(randomNumber);
};
const removeFunction = () => {
    app.options = [];
    renderMissionApp();
};
const formSubmit = (e) => {
    e.preventDefault();
    const mission = e.target.elements.mission.value;
    if (mission) {
        app.options.push(mission);
        e.target.elements.mission.value= '';
    }
    renderMissionApp();
};

//temaplte for the main page
renderMissionApp();