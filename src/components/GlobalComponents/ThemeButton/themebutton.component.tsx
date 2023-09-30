import React from "react";
import styles from "./themebutton.module.scss";

interface Props {
  text: string;
  onClick: () => void;
}

const ThemeButton = ({ text, onClick }: Props): JSX.Element => {
  return (
    <button className={styles.themeButton} onClick={onClick}>
      {text}
    </button>
  );
};
export default ThemeButton;
