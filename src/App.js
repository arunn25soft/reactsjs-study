import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import  Header  from './components/header';
import  InputText  from './components/inputText';
import  SubmitButton  from './components/button';
import { Button } from "carbon-components-react";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }
  clickme(){
    alert("you clicked me");
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

  <form  onSubmit={this.handleSubmit} className="padding-layout">
  <Header header_title="Dashboard"/>
  <section className="bx--col-xs-12 about-app">React with IBM Carbon UI</section>
	{/* <section className="bx--col-xs-12 about-subtitle">Your Information</section> */}
			{/* <div class="bx--grid no-margin bottom-pad"> */}
				{/* <div class="bx--row no-margin"> */}
					<div className="bx--col-md-4 bx--col-xs-12 label-div">
            <InputText label_text="First Name" placeholder_text="Please enter first name"/>
					</div>
          <div className="bx--col-md-4 bx--col-xs-12 label-div">
            <InputText label_text="Email Id" placeholder_text="Please enter email id"/>
					</div>
          <div className="bx--col-md-4 bx--col-xs-12 label-div">
            <InputText label_text="Phone" placeholder_text="Please enter phone"/>
					</div>
          <div className="bx--col-md-4 bx--col-xs-12 label-div">
            <Button button_name="Submit" button_type="primary" onClick={this.clickme}>submit</Button>
          </div>
				{/* </div> */}
      {/* </div> */}
  </form>


    );
  }
}

export default App;
