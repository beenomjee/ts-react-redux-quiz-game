import { QUIZ_CONSTANTS } from "../constants";

export interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string, string, string];
}

export interface IQuizState {
  isLoading: boolean;
  error: string;
  quizzes: IQuiz[];
}

export interface IQuizFetchRequest {
  type: QUIZ_CONSTANTS.QUIZ_FETCH_REQUEST;
}
export interface IQuizFetchSuccess {
  type: QUIZ_CONSTANTS.QUIZ_FETCH_SUCCESS;
  payload: IQuiz[];
}

export interface IQuizFetchFailure {
  type: QUIZ_CONSTANTS.QUIZ_FETCH_FAILURE;
  payload: string;
}

export type IQuizAction =
  | IQuizFetchRequest
  | IQuizFetchSuccess
  | IQuizFetchFailure;

export interface IQuizRequestResponse {
  response_code: number;
  results: IQuiz[];
}
