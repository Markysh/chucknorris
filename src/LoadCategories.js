import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "./store/categories";

export const LoadCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return "";
};
