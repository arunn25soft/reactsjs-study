import React, { Component } from 'react';
import './App.css';
import  Header  from './components/header';
import  InputText  from './components/inputText';
import { Button } from "carbon-components-react";
import axios from "axios";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
} from "carbon-components-react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {email: ''};
    this.state = {phone: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
     // alert('A name was submitted: ' + this.state.name);
     // alert('An email was submitted: ' + this.state.email);
     // alert('A phone was submitted: ' + this.state.phone);
      event.preventDefault();
      this.submitToServer();
      
  }
  submitToServer(){
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    axios.post('http://qf.local',{data}).then((res)=>{
      alert(res.data.resp)
    }).catch((error)=>{
      alert(error)
      console.log(error)
    });
  }
  onChangeName = (val) => {
    this.setState({
      name: val
    })
  };
  onChangeEmail = (val) => {
    this.setState({
      email: val
    })
  };
  onChangePhone = (val) => {
    this.setState({
      phone: val
    })
  };
  
  render() {
    return (
    <form  onSubmit={this.handleSubmit} className="padding-layout">
    <Header header_title="Dashboard"/>
    <section className="bx--col-xs-12 about-app">React with IBM Carbon UI</section>
    <div className="bx--row">
    <div className="bx--col-xs-12 bx--col-md-6">
            <div className="bx--col-md-6 bx--col-xs-12 label-div">
              <InputText onUpdate={this.onChangeName} input_id="test2" helper_text="Name as on passport" input_type="text" error_text="A valid value is required" label_text="First name" placeholder_text="Please enter name"/>
            </div>
            <div className="bx--col-md-6 bx--col-xs-12 label-div">
              <InputText onUpdate={this.onChangeEmail} input_id="test2" helper_text="Official email id" input_type="text" error_text="A valid value is required" label_text="Email id" placeholder_text="Please enter email id"/>
            </div>
            <div className="bx--col-md-6 bx--col-xs-12 label-div">
              <InputText onUpdate={this.onChangePhone} input_id="test3" helper_text="Official Phone" input_type="text" error_text="A valid value is required" label_text="Phone number" placeholder_text="Please enter phone"/>
            </div>
            <div className="bx--col-md-6 bx--col-xs-12 label-div">
              <Button type="submit" button_name="Submit" button_type="primary" onClick={this.clickme}>submit</Button>
            </div>
    </div>
    <div className="bx--col-xs-12 bx--col-md-6">
            <div className="bx--col-md-6 bx--col-xs-12 label-div">
              {/* <InputText onUpdate={this.onChangeName} input_id="test2" helper_text="Name as on passport" input_type="text" error_text="A valid value is required" label_text="First name" placeholder_text="Please enter name"/> */}
              <StructuredListWrapper>
                    <StructuredListHead>
                      <StructuredListRow head>
                        <StructuredListCell head>
                            #
                        </StructuredListCell>
                        <StructuredListCell head>
                            Name
                        </StructuredListCell>
                        <StructuredListCell head>
                            Email
                        </StructuredListCell>
                        <StructuredListCell head>
                            Phone
                        </StructuredListCell>
                      </StructuredListRow>
                    </StructuredListHead>

                  <StructuredListBody>
                    <StructuredListRow>
                      <StructuredListCell noWrap>
                          1
                      </StructuredListCell>
                      <StructuredListCell>
                          Arun
                      </StructuredListCell>
                      <StructuredListCell>
                          arunwrc@gmail.com
                      </StructuredListCell>
                      <StructuredListCell>
                          9633532262
                      </StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                      <StructuredListCell noWrap>
                          2
                      </StructuredListCell>
                      <StructuredListCell>
                          Sujeesh
                      </StructuredListCell>
                      <StructuredListCell>
                          sujeesh@gmail.com
                      </StructuredListCell>
                      <StructuredListCell>
                          9995499541
                      </StructuredListCell>
                    </StructuredListRow>
                  </StructuredListBody>
              </StructuredListWrapper>
           

             
            </div>
    </div>
    </div>
    </form>
    );
  }
}

export default App;
