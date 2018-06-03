import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp"
import "normalize.css/normalize.css";
import "./styles/styles.scss"


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

/* const Layout=(props)=>{

    return(
        <div>
        <p>Header</p>
        {props.children}
        
        </div>
    );
}

ReactDOM.render(<Layout> <p>this is a children</p></Layout>, document.getElementById("app"));

//when layout component is passed like <Layout> <p>this is a children</p></Layout>,the inside paragraph will act as a children and can be accessed using props.children properties.
 */
