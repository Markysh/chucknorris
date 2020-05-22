import React from "react";
import { Radio, Label, Text, CategoryHolder } from "./categories.styles";
import { useSelector } from "react-redux";

export const Categories = (props) => {
  const categories = useSelector((state) => state.categories).map(
    (category, index) => {
      return (
        <Label key={index}>
          <Radio
            name="category"
            type="radio"
            value={category}
            onChange={props.onChange}
          />
          <Text>{category}</Text>
        </Label>
      );
    }
  );

  return <CategoryHolder>{categories}</CategoryHolder>;
};
