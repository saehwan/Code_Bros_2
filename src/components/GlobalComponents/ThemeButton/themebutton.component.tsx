import React from "react";
import styles from "./themebutton.module.scss";

interface Props {
  text: string;
  onClick: () => void;
  buttonType: string;
}

const ThemeButton = ({
  text,
  onClick,
  buttonType = "",
}: Props): JSX.Element => {
  return (
    <button
      className={
        buttonType === "delete"
          ? styles.cancelButton
          : buttonType === "choose"
          ? styles.chooseButton
          : styles.themeButton
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default ThemeButton;
