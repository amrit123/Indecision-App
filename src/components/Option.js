import React from "react";
const Option = (props) =>//stateless functional component.faster then class baesed component.they also do not have access to state lifecycle method
     (
        <div className="option">  
        <p className="option-text"> {props.count}. {props.optionText}</p>        
               
                    <button 
                    className="button button--link"
                    onClick={(e) => {
                    props.deleteIndividualOption(props.optionText);

                        }}>Remove
                        </button>
            
        </div>
    );


export default Option;