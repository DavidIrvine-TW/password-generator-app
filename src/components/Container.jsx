import Output from "./Output";
import ControlContainer from "./ControlContainer";
import { useState } from "react";
import PasswordGen from "./PasswordGen";

const controlItems = [
  {
    id: 1,
    label: "Include UpperCase Letters",
    checked: true,
  },
  {
    id: 2,
    label: "Include LowerCase Letters",
    checked: false,
  },
  {
    id: 3,
    label: "Include Numbers",
    checked: false,
  },
  {
    id: 4,
    label: "Include Symbols",
    checked: false,
  },
];

function Container() {
  const [controlData, setControlData] = useState(controlItems);
  const [sliderValue, setSliderValue] = useState([10]);
  const [newPassword, setNewPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const sliderChangeHandler = (values) => {
    setSliderValue(values);
  };

  const generatePasswordHandler = () => {
    const options = controlData.filter((option) => option.checked);
    if (options.length === 0) {
      setIsValid(false);
      return;
    }
    const generatedPassword = PasswordGen(controlData, sliderValue);
    setIsValid(true);
    setNewPassword(generatedPassword);
  };

  return (
    <main className="mt-[4em] mx-auto tablet:w-[540px] tablet:h-[695px] w-[343px] h-[540px] rounded font-bold">
      <h1 className="text-center desktop:text-heading-m-dk tablet:text-heading-m-tb text-heading-m-mb text-gray">
        Password Generator
      </h1>
      <Output newPassword={newPassword} />
      <ControlContainer
        sliderValue={sliderValue}
        sliderChangeHandler={sliderChangeHandler}
        controlData={controlData}
        setControlData={setControlData}
        generatePasswordHandler={generatePasswordHandler}
        isValid={isValid}
        setIsValid={setIsValid}
      />
    </main>
  );
}

export default Container;
