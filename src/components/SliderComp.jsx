import "./sliderComp.css";
import * as Slider from "@radix-ui/react-slider";

function SliderComp({ sliderValue, sliderChangeHandler }) {
  return (
    <form>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[10]}
        onValueChange={sliderChangeHandler}
        min={0}
        max={20}
        step={1}
        values={sliderValue}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
}

export default SliderComp;
