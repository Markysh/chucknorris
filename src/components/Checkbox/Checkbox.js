import React from "react";
import { CheckboxLabel, InputCheckbox, CheckBoxIcon } from "./checkbox.styles";

export const Checkbox = (props) => {
  return (
    <CheckboxLabel>
      <InputCheckbox
        type={props.type}
        name={props.name}
        onClick={props.onClick}
      />
      <CheckBoxIcon />
      {props.children}
    </CheckboxLabel>
  );
};
