import { animationStateActionType, animationStateType } from "./../types/model";
import { ANIMATE_MODEL } from "./types_constant";

export const animateModel = (
  data: animationStateType
): animationStateActionType => {
  return {
    type: ANIMATE_MODEL,
    data,
  };
};
