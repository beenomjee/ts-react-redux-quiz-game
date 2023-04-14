import { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
