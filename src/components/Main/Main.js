import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Name,
  Title,
  Subtitle,
  CheckboxText,
  Button,
} from "./main.styles";
import { Radio } from "../Radio/Radio";
import {
  getRandomCategoryJoke,
  getRandomJoke,
  getSearchJoke,
} from "../../store/randomJoke";
import { JokeList } from "../JokeList/JokeList";
import { Categories } from "../Categories/Categories";
import { TextSearch } from "../TextSearch/TextSearch";

export const Main = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes);
  const [active, setActive] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Name>MSI 2020</Name>
      <Title>Hey!</Title>
      <Subtitle>Let’s try to find a joke for you:</Subtitle>
      <Radio value="random" onChange={(event) => setActive(event.target.value)}>
        <CheckboxText>Random</CheckboxText>
      </Radio>
      <Radio
        value="category"
        onChange={(event) => setActive(event.target.value)}
      >
        <CheckboxText>From Categories</CheckboxText>
      </Radio>
      {active === "category" && (
        <Categories onChange={(event) => setCategory(event.target.value)} />
      )}
      <Radio value="search" onChange={(event) => setActive(event.target.value)}>
        <CheckboxText>Search</CheckboxText>
      </Radio>
      {active === "search" && (
        <TextSearch onChange={(event) => setSearch(event.target.value)} />
      )}
      <Button disabled={active === ""} onClick={getJokes}>
        Get a joke
      </Button>
      {jokes.length !== 0 && <JokeList />}
    </Container>
  );

  function getJokes() {
    switch (active) {
      case "random":
        return dispatch(getRandomJoke());
      case "category":
        return dispatch(getRandomCategoryJoke(category));
      case "search":
        return dispatch(getSearchJoke(search));
    }
  }
};
