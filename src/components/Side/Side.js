import React from "react";
import { Container, ItemsHolder, Title } from "./side.styles";
import { useSelector } from "react-redux";
import { JokeItem } from "../JokeItem/JokeItem";

export const Side = (props) => {
  const { isOpen } = props;
  const favorites = useSelector((state) => state.favorites).map((favorite) => {
    return <JokeItem key={favorite.id} joke={favorite} theme={"light"} />;
  });

  return (
    <Container open={isOpen}>
      <Title>Favourite</Title>
      <ItemsHolder>{favorites}</ItemsHolder>
    </Container>
  );
};
