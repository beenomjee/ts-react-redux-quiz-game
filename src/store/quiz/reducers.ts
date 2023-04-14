import { QUIZ_CONSTANTS } from "../constants";
import type { IQuizAction, IQuizState } from "./types";

const initialState: IQuizState = {
  isLoading: false,
  quizzes: [],
  error: "",
};

const quizReduer = (state = initialState, action: IQuizAction): IQuizState => {
  switch (action.type) {
    case QUIZ_CONSTANTS.QUIZ_FETCH_REQUEST:
      return {
        ...state,
        quizzes: [],
        isLoading: true,
        error: "",
      };
    case QUIZ_CONSTANTS.QUIZ_FETCH_SUCCESS:
      return {
        ...state,
        quizzes: action.payload,
        isLoading: false,
        error: "",
      };
    case QUIZ_CONSTANTS.QUIZ_FETCH_FAILURE:
      return {
        ...state,
        quizzes: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export { quizReduer };
