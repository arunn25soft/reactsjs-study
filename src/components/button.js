import React from 'react';
import { Button } from "carbon-components-react";

const SubmitButton = (props) => (
        <Button className="some-class" kind={props.button_type}>
            {props.button_name}
        </Button>
  )

  export default SubmitButton;