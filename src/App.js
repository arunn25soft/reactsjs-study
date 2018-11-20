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
  StructuredListCell,
  ToastNotification,
  Loading
} from "carbon-components-react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {email: ''};
    this.state = {phone: ''};
    this.state = {mode: ''};
    this.state = {visibility: 'false'};
    this.state = {preloading: true};
    this.state = {userDetails: []};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
     // alert('A name was submitted: ' + this.state.name);
     // alert('An email was submitted: ' + this.state.email);
     // alert('A phone was submitted: ' + this.state.phone);
      event.preventDefault();
      this.submitToServer();
      //const  userDetails = '"first_name":"manu","email":"manu@gmail.com","phone":"98956741"';
      //this.setState({ userDetails })
      
      
  }
  // componentDidMount() {
  //   var th = this;
  //   this.serverRequest = axios.get(this.props.source)
  //   .then(function(event) { 
  //       th.setState({
  //           data: event.data
  //       });
  //   })
  //  }
  getDataFromServer(){ 
    axios.get('http://qf.local/list.php')
      .then((json)=>{
        const userDetails = json.data.resp;
        this.setState({ userDetails })
      }, (reason) => {
      });
  }
  componentDidMount(){
    this.setState({ preloading: false})
    axios.get('http://qf.local/list.php')
      .then((json)=>{ 
       if(json.data !== null){
          const userDetails =  json.data.resp;
          //console.log("Server response "+userDetails.length);
          if(userDetails.length > 0){
            this.setState({ visibility: 'true'})
             this.setState({ userDetails })
           }else{
             this.setState({ visibility: 'false'})
           }
        }
      });
  }
  submitToServer(){
    this.setState({ preloading: true})
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    axios.post('http://qf.local',{data}).then((res)=>{
      console.log(res.data.resp)
      this.setState({
        mode: 'insert-success'
      })
      this.setState({ 
        visibility: 'true'
      })
      var that = this;
      that.getDataFromServer();
      setTimeout(function(){
        that.setState({
          mode: ''
        })
        that.setState({ preloading: false})  
      },800);
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
        <Loading active={this.state.preloading} withOverlay={true} className="preloader-class" />
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
                    <section className="bx--col-xs-12 notification-holder">
                    {this.state.mode === 'insert-success' && (
                      <ToastNotification
                        kind="success"
                        title="Success"
                        subtitle=""
                        iconDescription="describes the close button"
                        //onCloseButtonClick=''
                        caption="Data inserted"
                        style={{minWidth: '30rem',marginBottom: '.5rem'}}
                      /> 
                      )}
                    </section>
            </div>
        
            <div className="bx--col-xs-12 bx--col-md-6">
                  <div className="bx--col-md-6 bx--col-xs-12 label-div">
                    <StructuredListWrapper>
                        {this.state.visibility === 'true' && (
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
                        )}                  
                        <StructuredListBody>
                        {/* {this.state.people.map((person, index) => ( */}
                          {this.state.userDetails.map((user,index) =>(
                          <StructuredListRow key={index}>
                            <StructuredListCell noWrap>
                            {index+1}
                            </StructuredListCell>
                            <StructuredListCell>
                            {user.first_name}
                            </StructuredListCell>
                            <StructuredListCell>
                            {user.email}
                            </StructuredListCell>
                            <StructuredListCell>
                              {user.phone}
                            </StructuredListCell>
                          </StructuredListRow>
                          ))}
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
