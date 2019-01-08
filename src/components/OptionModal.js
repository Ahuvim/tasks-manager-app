
import React from 'react';
import Modal from 'react-modal';



const OptionModal = (props) => (
    <Modal closeTimeoutMS={200} className="modal" isOpen={!!props.selectedOption} contentLabel="Selected Option" onRequestClose={props.goButton}>
        <div>
            <h3 className="modal--title">Your mossion is:</h3>
            <p className="modal--body">{props.selectedOption}</p>
            <button className="button" onClick={props.goButton}>Go!</button>
        </div>
    </Modal>
    );

export default OptionModal; 