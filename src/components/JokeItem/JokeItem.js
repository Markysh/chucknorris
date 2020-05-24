import React from "react";
import {
  Container,
  Favorite,
  NotFavorite,
  MessageHolder,
  Message,
  ItemHolder,
  ItemId,
  ItemText,
  DescriptionWrapper,
  ItemUpdate,
  ItemCategory,
  Link,
  Id,
  LinkIcon,
} from "./jokeItem.styles";
import { addFavorite, removeFavorite } from "../../store/favorites";
import { useDispatch, useSelector } from "react-redux";

export const JokeItem = (props) => {
  const { joke, theme = "dark" } = props;
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites).indexOf(joke) > -1;

  return (
    <Container theme={theme}>
      {isFavorite ? (
        <Favorite onClick={() => dispatch(removeFavorite(joke))} />
      ) : (
        <NotFavorite onClick={() => dispatch(addFavorite(joke))} />
      )}
      <MessageHolder>
        <Message theme={theme} />
        <ItemHolder>
          <ItemId>
            <Id>ID:</Id>
            <Link href={joke.id}>{joke.id}</Link>
            <LinkIcon href={joke.id} />
          </ItemId>
          <ItemText>{joke.value}</ItemText>
          <DescriptionWrapper>
            <ItemUpdate>Last update: 1923 hours ago</ItemUpdate>
            {joke.categories.length !== 0 && (
              <ItemCategory theme={theme}>{joke.categories}</ItemCategory>
            )}
          </DescriptionWrapper>
        </ItemHolder>
      </MessageHolder>
    </Container>
  );
};
