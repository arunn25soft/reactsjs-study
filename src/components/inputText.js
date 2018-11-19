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
        helperText={this.props.helper_text}
    />
  );
}

}
export default InputText;
