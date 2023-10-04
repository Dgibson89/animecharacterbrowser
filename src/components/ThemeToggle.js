import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ darkTheme, setDarkTheme }) => {
  return (
    <button onClick={() => setDarkTheme(!darkTheme)}>
      {darkTheme ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
