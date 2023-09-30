import React, { useState } from "react";
import styles from "./home.module.scss";
import Logo from "../../assets/Logo.png";
import { useDispatch } from "react-redux";
import { setStarted } from "../../store/Edit/slice";
import ThemeButton from "../GlobalComponents/ThemeButton/themebutton.component";
import { useNavigate } from "react-router-dom";

const description = `Palate Passport is an app developed by Code Bros that
 enhances users' culinary quests. Fellow foodies
  can search nearby restaurants and cafes, book reservations, get recommendations,
   and plan out their culinary adventures to obtain a diverse dining experience`;

const Home = (): JSX.Element => {
  const [visibility, setVisibility] = useState("fadeIn");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onStart = (): (() => void) => {
    setVisibility("fadeOut");

    // After the animation completes, dispatch the action
    const timeout = setTimeout(() => {
      dispatch(setStarted(true));
      navigate("/travel");
    }, 500);

    return () => clearTimeout(timeout);
  };

  return (
    <div className={`${styles.Home} ${styles[visibility]}`}>
      <img className={styles.logo} src={Logo} alt="Code Bros Logo" />
      <p className={styles.description}>{description}</p>
      <ThemeButton onClick={onStart} text={"Start"} />
    </div>
  );
};

export default Home;
