import React from "react";
import Option from "./Option";
 const Options = (props) =>  //stateless functional component.faster then class baesed component
     (
        <div>
        <div className="widget-header">
        <h3 className="widget-header--title">Your options</h3>
        <button 
        className="button button--link"
        onClick={props.handleDeleteAll}>Remove All</button>
        </div>
       
            
            {props.options.length === 0 && <p className="widget-messege">Please Add an option to start with!</p>}
            
           
            {
                props.options.map((item, i) => {
                    return (
                        <Option
                            key={i}
                            optionText={item}
                            count={i+1}
                            deleteIndividualOption={props.deleteIndividualOption} />)
                })
            }
        </div>
    );


export default Options;