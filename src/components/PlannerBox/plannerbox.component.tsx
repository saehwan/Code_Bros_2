import React, { Fragment, useState } from "react";
import styles from "./plannerbox.module.scss";
import ThemeButton from "../GlobalComponents/ThemeButton/themebutton.component";

const PlannerBox = (): JSX.Element => {
  const [entries, setEntries] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState("");
  const [currentMeal, setCurrentMeal] = useState("breakfast");
  const [addingTime, setAddingTime] = useState(false);

  const date = new Date();
  const today =
    date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

  const timeString = `${currentTime} ${currentMeal} at Finbomb`;

  const handleTimeEnter = (): void => {
    setEntries([...entries, timeString]);
    setCurrentTime("");
    setAddingTime(false);
  };

  const convertTimeToModern = (time: string): string => {
    const parts = time.split(":");

    let hours = parseInt(parts[0], 10);
    const minutes: string = parts[1];

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    } else if (hours === 0) {
      hours = 12;
    }

    const convertedTimeString = `${hours}:${minutes} ${ampm}`;

    return convertedTimeString;
  };

  return (
    <Fragment>
      <div className={styles.Planner}>
        <div style={{ marginBottom: "1%" }}>
          Today&apos;s Itinerary ({today})
        </div>
        <div>
          <ThemeButton
            text={addingTime ? "Cancel Add" : "+ Add New"}
            onClick={(): void => setAddingTime(!addingTime)}
          />
        </div>
        {addingTime && (
          <form
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1%",
            }}
            onSubmit={handleTimeEnter}
          >
            <input
              className={styles.PlannerInput}
              type="time"
              placeholder="Enter a time"
              onChange={(e): void =>
                setCurrentTime(convertTimeToModern(e.target.value))
              }
            />
            <select
              className={styles.PlannerInput}
              placeholder="Choose a meal"
              onChange={(e): void => setCurrentMeal(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Brunch">Brunch</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
            <button type="submit">+</button>
          </form>
        )}
        <div>
          {entries.map((entry, index) => (
            <div style={{ marginTop: "10%" }} key={index}>
              {entry}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default PlannerBox;
