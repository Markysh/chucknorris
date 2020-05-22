import styled from "styled-components";

export const CategoryHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Radio = styled.input`
  display: none;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Text = styled.div`
  padding: 6px 15px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ababab;
  border: 2px solid #f8f8f8;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  outline: none;

  input:checked + & {
    background: #f8f8f8;
    color: #333333;
  }
`;
