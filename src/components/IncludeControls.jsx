import ControlItem from "./ControlItem";

function IncludeControls({ controlData, setControlData }) {
  return (
    <article>
      <ul>
        {controlData.map((control, index) => (
          <ControlItem
            key={control.id}
            control={control}
            controlData={controlData}
            setControlData={setControlData}
            index={index}
          />
        ))}
      </ul>
    </article>
  );
}

export default IncludeControls;
