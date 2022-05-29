import { modelReducer } from "./reducers/model";
import { animateModel } from "./actions/model";
import { showWriting } from "./actions/writing";
import { writingReducer } from "./reducers/writing";
import { combineReducers, createStore } from "redux";

// 추후 reducer 확장을 위해, combineReducers 사용
const rootReducer = combineReducers({
  modelReducer,
  writingReducer,
});

const store = createStore(rootReducer);

// 추후 actionCreator 확장을 위해 action creators 선언
export const actionCreators = {
  animateModel,
  showWriting,
};

// 기본 state의 타입을 정의
export type RootState = ReturnType<typeof store.getState>;
// dispatch의 타입을 정의
export type AppDispatch = typeof store.dispatch;

export default store;
