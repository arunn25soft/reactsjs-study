// import React from 'react';
// import { TextInput } from "carbon-components-react";

// const InputText = (props) => (
//     <TextInput
//         className="bx--text-input"
//         id="test2"
//         labelText= {props.label_text}
//         type=""
//         placeholder= {props.placeholder_text}
//         hideLabel={false}
//         invalidText="A valid value is required"
//         name={props.label_text}
//         // helperText="Optional helper text."
//     />
//   )

//   export default InputText;



import React from 'react';
import { TextInput } from "carbon-components-react";
class InputText extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          val: ""
        }
      }
update = (e) => {
    console.log(e.target.value);
    this.props.onUpdate(e.target.value);
    this.setState({val: e.target.value});
  };
  render() {
    return (
 //InputText = (props) => (
     
    <TextInput
        className={this.props.class}
        id={this.props.input_id}
        labelText= {this.props.label_text}
        type={this.props.input_type}
        placeholder= {this.props.placeholder_text}
        hideLabel={false}
        invalidText= {this.props.error_text}
        name={this.props.label_text}
        onChange={this.update}
        // helperText="Optional helper text."
    />
 // )
  );
}

}
  export default InputText;
