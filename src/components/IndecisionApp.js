import React from "react";
import AddOptions from "./AddOptions"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"


 export default class IndecisionApp extends React.Component {
    
        state = {
            options: []
        }
    
    componentWillMount() {
        //fires when the App starts
    }
    componentDidMount() {
        //fires when the after component render
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
    
                this.setState(() => ({ options }));
            }
        }catch(e){
            console.log(e);
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        //fires when there is change in component state.like adding or deleting somethin in the state 
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    handleDeleteAll=()=> {

        this.setState(() => {
            return {
                options: [],
                selectedOption:undefined
            }

        });
    };
    handlePick=()=> {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selected = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption:selected
        }));

    };
    handleAddOptions=(option)=> {
        if (!option) {
            return "Enter valid value to add Items"
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "Items already exists"
        }

        this.setState((prevstate) => {

            return {
                options: prevstate.options.concat([option])
            }
        });

    };

    deleteIndividualOption=(item)=> {
        this.setState((prevstate) => ({
            options: prevstate.options.filter((option) => {
                return !(item === option); //false will delete tha data
            })
        }));
    };
    clearSelectedOption=()=>{
        this.setState(()=>({
            selectedOption:undefined
        }));
    }

    render() {
        const subtitle = "surrender your life in the hand of computer!";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                <Action 
                 hasOptions={this.state.options.length > 0} 
                 handlePick={this.handlePick}
                  />
                  <div className="widget">
                  <Options
                  options={this.state.options}
                  handleDeleteAll={this.handleDeleteAll}
                  deleteIndividualOption={this.deleteIndividualOption}
                  />
                  <AddOptions 
                  handleAddOptions={this.handleAddOptions}
                  />
                  </div>
                </div>
               
                <OptionModal 
                clearSelectedOption={this.clearSelectedOption} 
                selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}
