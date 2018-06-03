
const app={
    title:"Indecision App",
    subtitle:"put your life in the hand of the computer",
    options:[]
}
const onFormSubmit = (e)=>{

e.preventDefault();
const option = e.target.elements.option.value;
app.options.push(option);
e.target.elements.option.value="";

initApp();



};

 const removeAll=()=>{
    app.options.splice(0,app.options.length);
    initApp()
}

const onmakeDecision=()=>{
    const randomNum=Math.floor(Math.random()* app.options.length);
    const selected=app.options[randomNum];
    alert(selected);
};


const appRoot=document.getElementById("app");

const initApp=()=>{
    const templet=(
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p> }
        <p>{app.options.length>0 ? "Here are your options": "No options"}</p>
        <button disabled={app.options.length===0} onClick={onmakeDecision}>What should i do?</button>
        <button onClick={removeAll}>RemoveAll</button>
        <ol>
        {
            app.options.map((item)=>{
                return <li key={item}>{item}</li> ;
                })
        }
        </ol>
        
        
    
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
        </form>
        </div>
        
    );
    ReactDOM.render(templet,appRoot);
}

initApp();