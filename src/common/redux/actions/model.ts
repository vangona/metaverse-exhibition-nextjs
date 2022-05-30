import { ANIMATE_MODEL } from "../store";
import { animationStateActionType, animationStateType } from "./../types/model";

export const animateModel = (
  payload: animationStateType
): animationStateActionType => {
  return {
    type: ANIMATE_MODEL,
    payload,
  };
};
