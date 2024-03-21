import darkSun from "../../public/assets/images/icon-sun-dark.svg";
import lightSun from "../../public/assets/images/icon-sun-light.svg";
import lightMoon from "../../public/assets/images/icon-moon-light.svg";
import darkMoon from "../../public/assets/images/icon-moon-dark.svg";
import { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify([theme]));
  }, [theme]);

  function handleTheme(e) {
    setTheme(e.target.checked ? "dark" : "");
  }

  return (
    <div className="theme">
      <img src={theme === "dark" ? lightSun : darkSun} alt="dark sun" />
      <label htmlFor="toggle" className="toggle">
        <input
          type="checkbox"
          id="toggle"
          checked={theme === "dark"}
          onChange={handleTheme}
        />
        <div className="toggle__slider"></div>
      </label>
      <img src={theme === "dark" ? lightMoon : darkMoon} alt="dark moon" />
    </div>
  );
}

export default ToggleButton;
