import React from "react";

const strengths = [
  { id: 0, content: "" },
  { id: 1, content: "TOO WEAK!" },
  { id: 2, content: "WEAK" },
  { id: 3, content: "MEDIUM" },
  { id: 4, content: "STRONG" },
];

function Strength({ controlData }) {
  //counts the number of true values in controlData for use in styling the spans
  const countTrue = controlData.reduce((count, obj) => {
    if (obj.checked === true) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  // matches the countTrue to appopriate display content
  const match = strengths.find((strength) => strength.id === countTrue);

  const spanClass = "w-[10px] h-full border border-lightgray";

  // takes in span indexes and applies styles up to the index == countTrue
  const getIndicatorStyles = (index) => {
    if (index < countTrue) {
      if (countTrue === 1) {
        return {
          backgroundColor: "hsl(0, 91%, 63%)",
          border: "2px solid hsl(0, 91%, 63%)",
        };
      } else if (countTrue === 2) {
        return {
          backgroundColor: "hsl(13, 95%, 66%)",
          border: "2px solid hsl(13, 95%, 66%)",
        };
      } else if (countTrue === 3) {
        return {
          backgroundColor: "hsl(42, 91%, 68%)",
          border: "2px solid hsl(42, 91%, 68%)",
        };
      } else if (countTrue === 4) {
        return {
          backgroundColor: "hsl(127, 100%, 82%)",
          border: "2px solid hsl(127, 100%, 82%)",
        };
      }
    }
    return {
      backgroundColor: "transparent",
    };
  };

  return (
    <article className="rounded bg-black mt-[3.0625em] tablet:mb-[2em] tablet:px-[2em] tablet:py-[1.5em] mb-[1em] p-[1em]">
      <div className="flex items-center justify-between h-[36px]">
        <h3 className="text-body-mb text-gray tablet:text-body-dk ">
          STRENGTH
        </h3>
        <div className=" flex gap-[1em] items-center">
          <h4 className="text-strength-mb text-lightgray tablet:text-heading-m-dk">
            {match.content}
          </h4>
          <div className="flex gap-[8px] w-[64px] h-[31px]">
            <span
              style={getIndicatorStyles(0)}
              className={`${spanClass}`}
            ></span>
            <span
              style={getIndicatorStyles(1)}
              className={`${spanClass}`}
            ></span>
            <span
              style={getIndicatorStyles(2)}
              className={`${spanClass}`}
            ></span>
            <span
              style={getIndicatorStyles(3)}
              className={`${spanClass}`}
            ></span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Strength;
