import { writingStateActionType } from "./../types/writing";
import { SHOW_WRITING } from "./action_constants";

export const showWriting = (payload: boolean): writingStateActionType => {
  return {
    type: SHOW_WRITING,
    payload,
  };
};
