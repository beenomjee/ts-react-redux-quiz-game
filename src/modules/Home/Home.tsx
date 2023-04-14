import React, { useEffect, useState } from "react";
import { IStoreState, getQuizzes } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import { Loader, Quiz, Score, Start } from "../../components";
import { randomSortArray } from "../../utils";

const Home = () => {
  const dispatch = useDispatch();
  const quizState = useSelector((state: IStoreState) => state.quizState);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameStart, setIsGameStart] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const nextHandler = () => {
    if (currentQuestion === quizState.quizzes.length) {
      setIsFinished(true);
      return;
    }
    setIsSelected(false);
    setAnswers(
      randomSortArray([
        quizState.quizzes[currentQuestion].correct_answer,
        ...quizState.quizzes[currentQuestion].incorrect_answers,
      ])
    );
    setCurrentQuestion((prevState) => prevState + 1);
  };

  const startGame = () => {
    setIsGameStart(true);
    setIsFinished(false);
    setCurrentQuestion(1);
    setIsSelected(false);
    setScore(0);
    dispatch(getQuizzes());
  };

  useEffect(() => {
    if (quizState.quizzes.length > 0) {
      setAnswers(
        randomSortArray([
          quizState.quizzes[0].correct_answer,
          ...quizState.quizzes[0].incorrect_answers,
        ])
      );
    }
  }, [quizState.quizzes]);

  return (
    <div className={styles.container}>
      {!isGameStart && <Start callback={startGame} />}
      {quizState.isLoading && <Loader />}
      {quizState.quizzes.length > 0 && !isFinished && (
        <Quiz
          answers={answers}
          correctAnswer={quizState.quizzes[currentQuestion - 1].correct_answer}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          currentQuestion={currentQuestion}
          totalQuestions={quizState.quizzes.length}
          question={quizState.quizzes[currentQuestion - 1].question}
          callback={nextHandler}
          setScore={setScore}
        />
      )}
      {isFinished && <Score yourScore={score} callback={startGame} />}
    </div>
  );
};

export default Home;
