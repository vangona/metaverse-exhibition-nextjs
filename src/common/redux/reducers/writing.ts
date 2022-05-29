import { SHOW_WRITING } from "../actions/types_constant";
import { writingStateActionType } from "./../types/writing";

export const writingReducer = (
  prevState = [],
  action: writingStateActionType
) => {
  switch (action.type) {
    case SHOW_WRITING:
      return {
        ...prevState,
        writingState: action.data,
      };

    default:
      return prevState;
  }
};
