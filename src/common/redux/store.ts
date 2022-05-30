import { animateModel } from "./actions/model";
import { showWriting } from "./actions/writing";
import { AnyAction, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";

export const ANIMATE_MODEL = "ANIMATE_MODEL";
export const SHOW_WRITING = "SHOW_WRITING";

export interface State {
  writingState: boolean;
  animateState: boolean[];
}

// 추후 reducer 확장을 위해, combineReducers 사용
// HYDRATION을 위해 초기값을 설정해준다.
const rootReducer = (
  state: State = {
    writingState: false,
    animateState: [],
  },
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case SHOW_WRITING:
      return {
        ...state,
        writingState: action.payload,
      };
    case ANIMATE_MODEL:
      return {
        ...state,
        animateState: action.payload,
      };
    default:
      return state;
  }
};

// store 생성 및 wrapper로 감싸주기
const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};

const store = configureStore();

const wrapper = createWrapper(configureStore, { debug: true });

// 추후 actionCreator 확장을 위해 action creators 선언
export const actionCreators = {
  animateModel,
  showWriting,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
