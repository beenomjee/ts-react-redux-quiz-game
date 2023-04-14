import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import styles from "./Score.module.css";

interface Props {
  yourScore: number;
  callback: () => void;
}
const Score: FC<Props> = ({ yourScore, callback }) => {
  return (
    <div className={styles.container}>
      <p className={styles.score}>
        <span>Your score is </span>
        <span className={styles.score}>{yourScore}</span>
      </p>
      <div className={styles.button} onClick={callback}>
        <button>
          <span>Start Again</span>
          <span className={styles.icon}>
            <BsFillPlayFill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Score;
