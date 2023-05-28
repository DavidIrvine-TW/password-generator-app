import SliderComp from "./SliderComp";
import { useState } from "react";

function Slide({ sliderValue, sliderChangeHandler }) {
  return (
    <article className="mb-[2em]">
      <div className="flex justify-between items-center mb-[1.5em]">
        <p className="text-lightgray text-body-mb tablet:text-body-dk">
          Character Length
        </p>
        <span className="text-green text-heading-l-mb tablet:text-heading-l-dk ">
          {sliderValue}
        </span>
      </div>
      <SliderComp
        sliderValue={sliderValue}
        sliderChangeHandler={sliderChangeHandler}
      />
    </article>
  );
}

export default Slide;
