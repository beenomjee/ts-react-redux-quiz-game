import { FC, useEffect, useRef, useState } from "react";
import styles from "./Quiz.module.css";

interface Props {
  question: string;
  answers: string[];
  correctAnswer: string;
  callback: () => void;
  currentQuestion: number;
  totalQuestions: number;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Quiz: FC<Props> = ({
  question,
  answers,
  correctAnswer,
  callback,
  currentQuestion,
  totalQuestions,
  isSelected,
  setIsSelected,
  setScore,
}) => {
  const [correct, setCorrect] = useState("");
  const [wrong, setWrong] = useState("");
  const prevPropsQuestion = useRef("");
  const clickHandler = (answer: string) => {
    if (isSelected) return;
    if (answer === correctAnswer) {
      setCorrect(answer);
      setScore((prevState) => prevState + 1);
    } else {
      setCorrect(correctAnswer);
      setWrong(answer);
    }

    setIsSelected(true);
  };

  useEffect(() => {
    if (question != prevPropsQuestion.current) {
      setCorrect("");
      setWrong("");
    }
    prevPropsQuestion.current = question;
  }, [question]);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Quiz</h1>
        <p className={styles.time}>
          <span className={styles.text}>Time: </span>
          <span className={styles.seconds}>&infin;</span>
        </p>
      </div>
      <div className={styles.middle}>
        <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
        {answers.map((answer, index) => (
          <button
            className={`${
              correct === answer
                ? styles.correct
                : wrong === answer
                ? styles.wrong
                : ""
            }`}
            onClick={() => clickHandler(answer)}
            key={index}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></button>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.current}>{currentQuestion}</span>
          <span> of </span>
          <span className={styles.total}>{totalQuestions}</span>
          <span> Question</span>
        </div>
        <div className={styles.right}>
          <button disabled={!isSelected} onClick={callback}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
