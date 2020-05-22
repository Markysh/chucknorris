import React from "react";
import styled from "styled-components";

export const TextSearch = (props) => {
  return (
    <div>
      <InputSearch
        type="search"
        placeholder="Free text search..."
        onChange={props.onChange}
      />
    </div>
  );
};

const InputSearch = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 16px;
  line-height: 22px;
  box-sizing: border-box;
  border: 2px solid #333333;
  border-radius: 10px;
  outline: none;
`;
