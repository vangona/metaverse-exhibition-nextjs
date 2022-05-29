import { writingStateActionType } from "./../types/writing";
import { SHOW_WRITING } from "./types_constant";

export const showWriting = (data: boolean): writingStateActionType => {
  return {
    type: SHOW_WRITING,
    data,
  };
};
