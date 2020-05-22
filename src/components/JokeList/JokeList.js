import React from "react";
import styled from "styled-components";
import { JokeItem } from "../JokeItem/JokeItem";
import { useSelector } from "react-redux";

export const JokeList = () => {
  const jokes = useSelector((state) => state.jokes).map((joke) => {
    return <JokeItem key={joke.id} joke={joke} />;
  });

  return <Container>{jokes}</Container>;
};

export const Container = styled.div`
  margin-bottom: 140px;
`;
