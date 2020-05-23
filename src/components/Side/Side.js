import React from "react";
import { Container, Title } from "./side.styles";
import { useSelector } from "react-redux";
import { JokeItem } from "../JokeItem/JokeItem";

export const Side = () => {
  const favorites = useSelector((state) => state.favorites).map((favorite) => {
    return <JokeItem key={favorite.id} joke={favorite} theme={"light"} />;
  });

  return (
    <Container>
      <Title>Favourite</Title>
      {favorites}
    </Container>
  );
};
