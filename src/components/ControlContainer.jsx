import Slide from "./Slide";
import IncludeControls from "./IncludeControls";
import Strength from "./Strength";
import Button from "./Button";

function ControlContainer({
  controlData,
  setControlData,
  sliderValue,
  sliderChangeHandler,
  generatePasswordHandler,
  setIsValid,
  isValid,
}) {
  return (
    <section className="rounded p-[1em] tablet:px-[2em] tablet:mt-[1.5em] mt-[1em] bg-darkgrayblack">
      <Slide
        sliderValue={sliderValue}
        sliderChangeHandler={sliderChangeHandler}
      />
      <IncludeControls
        controlData={controlData}
        setControlData={setControlData}
      />
      <Strength controlData={controlData} />
      <Button
        generatePasswordHandler={generatePasswordHandler}
        setIsValid={setIsValid}
        isValid={isValid}
      />
    </section>
  );
}

export default ControlContainer;
