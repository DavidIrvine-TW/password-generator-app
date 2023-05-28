import { useState } from "react";
import checkIcon from "../assets/icon-check.svg";
import useToggle from "./useToggle";

function ControlItem({ control, controlData, setControlData }) {
  const [toggleItem, setToggleItem] = useToggle(control.checked);
  const [mutableControl, setMutableControl] = useState(control);

  const classes = toggleItem ? "bg-green" : "bg-lightgray";

  const toggleChangeHandler = () => {
    // create new obj with toggled checked
    const updateControl = {
      ...mutableControl,
      checked: !mutableControl.checked,
    };
    // update state variable with new state
    setMutableControl(updateControl);
    // This line creates a new array by mapping over an existing array and merges changes if ids match
    const updatedControls = controlData.map((item) =>
      item.id === control.id ? updateControl : item
    );
    setControlData(updatedControls);
  };

  const handleSpanClick = () => {
    const checkbox = document.getElementById(control.id);
    checkbox.checked = !mutableControl.checked;
    setToggleItem(!control.checked);
    toggleChangeHandler();
  };

  return (
    <li className="flex gap-[20px] tablet:gap-[1.5em] tablet:mb-[1.5em] items-center mb-[1em]">
      <input
        type="checkbox"
        checked={mutableControl.checked}
        onChange={toggleChangeHandler}
        id={control.id}
        style={{ display: "none" }}
      />

      <span
        className={`${classes} w-[20px] h-[20px] cursor-pointer rounded flex items-center justify-center bg-green`}
        onClick={handleSpanClick}
      >
        {toggleItem ? <img src={checkIcon} /> : ""}
      </span>

      <p className="text-body-mb text-lightgray tablet:text-body-dk ">
        {control.label}
      </p>
    </li>
  );
}

export default ControlItem;
