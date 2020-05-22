import styled from "styled-components";
import checkbox from "./radio.png";
import checkboxChecked from "./radioChecked.png";

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
`;

export const CheckBoxIcon = styled.span`
  width: 20px;
  height: 20px;
  background-image: url(${checkbox});
  background-size: contain;
  background-repeat: no-repeat;

  input:checked + & {
    background-image: url(${checkboxChecked});
  }
`;

export const InputCheckbox = styled.input`
  display: none;
`;
