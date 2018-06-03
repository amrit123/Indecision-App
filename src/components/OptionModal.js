import React from "react";
import Modal from "react-modal";

const OptionModal=(props)=>(
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    ariaHideApp={false}
    contentLabel="Selected Option"
    className="modal"
    closeTimeoutMS={200}
    >
    <h3 className="modal__title">Selected Options</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.clearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;


