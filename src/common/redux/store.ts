import { modelReducer } from "./reducers/model";
import { animateModel } from "./actions/model";
import { showWriting } from "./actions/writing";
import { writingReducer } from "./reducers/writing";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// 추후 reducer 확장을 위해, combineReducers 사용
// HYDRATION을 위해 초기값을 설정해준다.
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  modelReducer,
  writingReducer,
});

// store 생성 및 wrapper로 감싸주기
const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

// 추후 actionCreator 확장을 위해 action creators 선언
export const actionCreators = {
  animateModel,
  showWriting,
};

export default wrapper;
