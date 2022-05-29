import { SHOW_WRITING } from "../actions/action_constants";
import { writingStateActionType } from "./../types/writing";

const initialState = {
  writingState: false,
};

export const writingReducer = (
  prevState = initialState,
  action: writingStateActionType
) => {
  switch (action.type) {
    case SHOW_WRITING:
      return {
        ...prevState,
        writingState: action.payload,
      };

    default:
      return prevState;
  }
};
