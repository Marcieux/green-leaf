import { useContext } from "react";
import { MiniCartContext } from "../contexts/MiniCartContext";

export const useMiniCartContext = () => {
  return useContext(MiniCartContext);
};
