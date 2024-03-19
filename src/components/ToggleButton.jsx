import darkSun from "../../public/assets/images/icon-sun-dark.svg";
import lightSun from "../../public/assets/images/icon-sun-light.svg";
import lightMoon from "../../public/assets/images/icon-moon-light.svg";
import darkMoon from "../../public/assets/images/icon-moon-dark.svg";

function ToggleButton() {
  return (
    <div className="theme">
      <img src={darkSun} alt="dark sun" />
      <label htmlFor="toggle" className="toggle">
        <input type="checkbox" id="toggle" />
        <div className="toggle__slider"></div>
      </label>
      <img src={darkMoon} alt="dark moon" />
    </div>
  );
}

export default ToggleButton;
