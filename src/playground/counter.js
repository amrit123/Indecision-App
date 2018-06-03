
let count=0;
const plusCount=()=>{
    
count++;
renderCount();
}
const reduceCount=()=>{
    count--;
    renderCount();
}
const resetCount=()=>{
    count=0;
    renderCount();
}

const appRoot=document.getElementById("app");


const renderCount=()=>{
    const templet=(
        <div>
        <h1>count:{count}</h1>
        <button onClick={plusCount}>+1</button>
        <button onClick={reduceCount}>-1</button>
        <button onClick={resetCount}>reset</button>
        </div>
    );
    ReactDOM.render(templet,appRoot);
}
renderCount();