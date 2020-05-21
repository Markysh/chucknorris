import React from "react";
import {
  Container,
  Name,
  Title,
  Subtitle,
  CheckboxText,
  Button,
} from "./main.styles";
import { Checkbox } from "../Checkbox/Checkbox";

export const Main = () => {
  return (
    <Container>
      <Name>MSI 2020</Name>
      <Title>Hey!</Title>
      <Subtitle>Let’s try to find a joke for you:</Subtitle>
      <Checkbox type="radio" name="search">
        <CheckboxText>Random</CheckboxText>
      </Checkbox>
      <Checkbox type="radio" name="search">
        <CheckboxText>From Categories</CheckboxText>
      </Checkbox>
      <Checkbox type="radio" name="search">
        <CheckboxText>Search</CheckboxText>
      </Checkbox>
      <Button>Get a joke</Button>
    </Container>
  );
};
