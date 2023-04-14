import { combineReducers } from "redux";
import { quizReduer } from "./quiz";

const rootReducer = combineReducers({
  quizState: quizReduer,
});

export default rootReducer;
