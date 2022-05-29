import { animationStateActionType, animationStateType } from "./../types/model";
import { ANIMATE_MODEL } from "./action_constants";

export const animateModel = (
  payload: animationStateType
): animationStateActionType => {
  return {
    type: ANIMATE_MODEL,
    payload,
  };
};
