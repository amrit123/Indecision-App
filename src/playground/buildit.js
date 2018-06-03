 
    
class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility=this.toggleVisibility.bind(this);
        this.state={
            visibility=false
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility:! prevState.visibility
            }
             
            
        })
    }

    render(){

        return(
            <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>{this.state.visibility? "hide details":"show details"}</button>
        {this.state.visibility && (
            <div>
            <p>the texts are visible now</p>
            </div>
        )}
          </div>
        );
    }

}
const appRoot=document.getElementById("app");
ReactDOM.render(<Visibility/>,appRoot);

/* let Visibility=false;

const toggleVisibility=()=>{
    Visibility=!Visibility;
    render();
}
const appRoot=document.getElementById("app");

const render=()=>{
    const templet=(
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>{Visibility? "hide details":"show details"}</button>
        {Visibility && (
            <div>
            <p>the texts are visible now</p>
            </div>
        )}
        </div>
        
    );
    ReactDOM.render(templet,appRoot);
}

render(); */