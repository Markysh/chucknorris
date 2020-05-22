import React from "react";
import { CheckboxLabel, InputCheckbox, CheckBoxIcon } from "./radio.styles";

export const Radio = (props) => {
  return (
    <CheckboxLabel>
      <InputCheckbox
        type="radio"
        value={props.value}
        name="search"
        onChange={props.onChange}
      />
      <CheckBoxIcon />
      {props.children}
    </CheckboxLabel>
  );
};
