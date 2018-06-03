import React from "react";
export default class AddOptions extends React.Component {
   
        state = {
            error: undefined
        };

    
    handleOnSubmit=(e)=> {

        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const err = this.props.handleAddOptions(option);
        this.setState(() =>({error: err})) ;
       
        if(!err){
            e.target.elements.option.value = "";
        }
    };

    render() {

        return (
            <div>
                {this.state.error && <p className="add-option-error"> {this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleOnSubmit}>
                    <input className="add-option-input" type="text" name="option" />
                    <button className="button">Add item</button>
                </form>
            </div>
        );
    }

}