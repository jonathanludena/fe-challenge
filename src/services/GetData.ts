import axios from "axios";
import { Item } from "../types";

export const getResults = async (
  query: string | null
): Promise<Item[] | []> => {
  if (query) {
    const res = await axios(`${import.meta.env.VITE_URI_API}?q=${query}`);
    return res.data.results;
  } else {
    return [];
  }
};

export const getResItemById = async (id: number): Promise<Item | null> => {
  if (id) {
    const res = await axios(`${import.meta.env.VITE_URI_API}/${id}`);
    return res.data.data;
  }

  return null;
};
