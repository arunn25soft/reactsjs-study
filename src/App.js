import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import  InputText  from './components/inputText';
import  SubmitButton  from './components/button';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("submited data is "+data);
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }
  render() {
    return (
      // <form className="form-background">
      // <div className="bx--grid bottom-pad">
      
      //   <div className="form-input bx--col-xs-4">
      //       <InputText label_text="First Name" placeholder_text="Please enter first name"/>
      //   </div>
      //   <div className="form-input bx--col-xs-4">
      //       <InputText label_text="Email Id" placeholder_text="Please enter email id"/>
      //   </div>
      //   <div className="form-input bx--col-xs-4">
      //       <InputText label_text="Phone #" placeholder_text="Please enter phone number"/>
      //   </div>
      //     <div className="button-container">
      //       <SubmitButton button_name="Submit" button_type="primary"/>
      //     </div>
      //     </div>
      // </form>
  <form class="padding-layout">
	<section class="bx--col-xs-12 about-subtitle">Your Information</section>
	
			<div class="bx--grid no-margin bottom-pad">
				<div class="bx--row no-margin">
					<div class="bx--col-md-4 bx--col-xs-12 label-div">
          <InputText label_text="First Name" placeholder_text="Please enter first name"/>
					</div>
				</div>
      </div>
    
  </form>
    );
  }
}

export default App;
