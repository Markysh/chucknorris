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

export const JokeItem = () => {
  return (
    <Container>
      <Favorite />
      <MessageHolder>
        <Message />
        <ItemHolder>
          <ItemId>ID: Link</ItemId>
          <ItemText>
            No one truly knows who's Chuck Norris' real father. No one is
            biologically strong enough for this. He must've conceived himself.
          </ItemText>
          <DescriptionWrapper>
            <ItemUpdate>Last update: 1923 hours ago</ItemUpdate>
            <ItemCategory>Celebrity</ItemCategory>
          </DescriptionWrapper>
        </ItemHolder>
      </MessageHolder>
    </Container>
  );
};
