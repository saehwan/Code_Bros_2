import React, { useState } from "react";
import styles from "./dropdownfilter.module.scss";

interface Props {
  title: string;
  options: string[];
  handleStateChange: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownSelector = (props: Props): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  // Event handler for dropdown change
  const handleDropdownChange = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setSelectedValue(event.target.value);
    props.handleStateChange(event.target.value);
  };

  return (
    <div>
      <select
        className={styles.dropdown}
        value={selectedValue}
        onChange={handleDropdownChange}
      >
        <option className={styles.option} value="">
          {props.title}
        </option>
        {props.options.map((option) => {
          return (
            <option className={styles.option} key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownSelector;
