import React, { Component } from 'react';
import './App.css';
import  Header  from './components/header';
import  InputText  from './components/inputText';
import  SubmitButton  from './components/button';
import { Button } from "carbon-components-react";

import { TextInput } from "carbon-components-react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(e) {
    
    console.log("text changed");
  }
//   handleChange(e){
//     this.setState({[e.target.id]: e.target.value});
//  }
  handleSubmit(event) {
    //console.log(event);
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }
  updateInput(event){
    console.log("changed text");
    //this.setState({username : event.target.value})
    }
  updateInputValue(evt) {
    console.log("changed value");
    this.setState({
      value: evt.target.value
    });
  }
  onUpdate = (val) => {
    this.setState({
      val: val
    })
  };
  
  render() {
    return (
  <form  onSubmit={this.handleSubmit} className="padding-layout">
  <Header header_title="Dashboard"/>
  <section className="bx--col-xs-12 about-app">React with IBM Carbon UI</section>
					<div className="bx--col-md-4 bx--col-xs-12 label-div">
            <TextInput  id="test2" className="bx--text-input" type="text" value={this.state.value} labelText="First Name" onChange={this.updateInputValue.bind(this)} placeholder="Please enter first name"/> 
            {/* <input type="text" onChange={this.updateInputValue.bind(this)}/> */}
          </div>
          <div className="bx--col-md-4 bx--col-xs-12 label-div">
            <InputText onUpdate={this.onUpdate}  placeholder="Please enter email id"/>
					</div>
          <div className="bx--col-md-4 bx--col-xs-12 label-div">
            <InputText  placeholder="Please enter phone"/>
					</div>
          <div className="bx--col-md-4 bx--col-xs-12 label-div">
            <Button type="submit" button_name="Submit" button_type="primary" onClick={this.clickme}>submit</Button>
          </div>
  </form>
    );
  }
}

export default App;
