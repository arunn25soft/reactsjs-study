import React, { Component } from 'react';
import {
  Modal
} from "carbon-components-react";
class PopupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modalOpen: true,
          composedModalOpen: false
        };
    
        //this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        //this.openComposedModal = this.openComposedModal.bind(this);
        //this.closeComposedModal = this.closeComposedModal.bind(this);
      }
//const PopupModal = (props) => (
    closeModal() {
        console.log("Closing regular modal");
        this.setState({ modalOpen: false });
      }
    render() {
        return ( 
    <Modal
        className="some-class"
        open={this.state.modalOpen}
        danger={true}
        shouldSubmitOnEnter={true}
        modalHeading="Delete"
        modalLabel=""
        modalAriaLabel=""
        primaryButtonText="Proceed"
        secondaryButtonText="Cancel"
        iconDescription="Close the modal"
        // onBlur={onBlur}
        // onClick={onClick}
        // onFocus={onFocus}
        onRequestClose={this.closeModal}
        onRequestSubmit={this.closeModal}
        // onSecondarySubmit={onSecondarySubmit}
    >
    <p className="bx--modal-content__text">
        Are you sure you want to delete this?
    </p>
    </Modal>
    );
}
  
}
  export default PopupModal;