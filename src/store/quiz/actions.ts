import { Dispatch } from "redux";
import { QUIZ_CONSTANTS } from "../constants";
import {
  IQuiz,
  IQuizAction,
  IQuizFetchFailure,
  IQuizFetchRequest,
  IQuizFetchSuccess,
  IQuizRequestResponse,
} from "./types";
import axios from "axios";

const quizFetchRequest = (): IQuizFetchRequest => ({
  type: QUIZ_CONSTANTS.QUIZ_FETCH_REQUEST,
});

const quizFetchSuccess = (quizzes: IQuiz[]): IQuizFetchSuccess => ({
  type: QUIZ_CONSTANTS.QUIZ_FETCH_SUCCESS,
  payload: quizzes,
});

const quizFetchFailure = (err: string): IQuizFetchFailure => ({
  type: QUIZ_CONSTANTS.QUIZ_FETCH_FAILURE,
  payload: err,
});

const getQuizzes = () => async (dispatch: Dispatch<IQuizAction>) => {
  try {
    dispatch(quizFetchRequest());
    const { data } = await axios.get<IQuizRequestResponse>(
      `https://opentdb.com/api.php?amount=10&type=multiple`
    );
    dispatch(quizFetchSuccess(data.results));
  } catch (err: any) {
    dispatch(quizFetchFailure(err.message));
  }
};

export { getQuizzes };
