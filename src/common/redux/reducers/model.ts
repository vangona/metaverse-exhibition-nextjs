import { animationStateActionType } from "./../types/model";
import { ANIMATE_MODEL } from "../actions/types_constant";

export const modelReducer = (
  prevState = [],
  action: animationStateActionType
) => {
  switch (action.type) {
    case ANIMATE_MODEL:
      return {
        ...prevState,
        animateState: action.data,
      };

    default:
      return prevState;
  }
};
