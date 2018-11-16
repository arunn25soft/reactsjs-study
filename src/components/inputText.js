import React from 'react';
import { TextInput } from "carbon-components-react";

const InputText = (props) => (
    <TextInput
        className="bx--text-input"
        id="test2"
        labelText= {props.label_text}
        type=""
        placeholder= {props.placeholder_text}
        hideLabel={false}
        invalidText="A valid value is required"
        name={props.label_text}
        // helperText="Optional helper text."
    />
  )

  export default InputText;