import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ darkTheme, setDarkTheme }) => {
  return (
    <button
      onClick={() => setDarkTheme(!darkTheme)}
      className="btn btn-outline-secondary my-3"
    >
      {darkTheme ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
