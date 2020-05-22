import React from "react";
import {
  Container,
  Favorite,
  MessageHolder,
  Message,
  ItemHolder,
  ItemId,
  ItemText,
  DescriptionWrapper,
  ItemUpdate,
  ItemCategory,
} from "./jokeItem.styles";

export const JokeItem = (props) => {
  const { joke } = props;

  return (
    <Container>
      <Favorite />
      <MessageHolder>
        <Message />
        <ItemHolder>
          <ItemId>ID: {joke.id}</ItemId>
          <ItemText>{joke.value}</ItemText>
          <DescriptionWrapper>
            <ItemUpdate>Last update: 1923 hours ago</ItemUpdate>
            {joke.categories.length !== 0 && (
              <ItemCategory>{joke.categories}</ItemCategory>
            )}
          </DescriptionWrapper>
        </ItemHolder>
      </MessageHolder>
    </Container>
  );
};
