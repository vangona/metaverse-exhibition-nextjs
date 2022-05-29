import { animationStateActionType } from "./../types/model";
import { ANIMATE_MODEL } from "../actions/action_constants";

const initialState = {
  animateState: [],
};

export const modelReducer = (
  prevState = initialState,
  action: animationStateActionType
) => {
  switch (action.type) {
    case ANIMATE_MODEL:
      return {
        ...prevState,
        animateState: action.payload,
      };

    default:
      return prevState;
  }
};
