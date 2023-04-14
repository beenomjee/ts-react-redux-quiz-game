import { FC } from "react";
import styles from "./Start.module.css";
import { BsFillPlayFill } from "react-icons/bs";

interface Props {
  callback: () => void;
}

const Start: FC<Props> = ({ callback }) => {
  return (
    <div className={styles.button} onClick={callback}>
      <button>
        <span>Start Game</span>
        <span className={styles.icon}>
          <BsFillPlayFill />
        </span>
      </button>
    </div>
  );
};

export default Start;
