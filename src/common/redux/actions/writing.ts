import { SHOW_WRITING } from "../store";
import { writingStateActionType } from "./../types/writing";

export const showWriting = (payload: boolean): writingStateActionType => {
  return {
    type: SHOW_WRITING,
    payload,
  };
};
