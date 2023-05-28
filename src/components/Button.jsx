import { useState } from "react";

function Button({ generatePasswordHandler, setIsValid, isValid }) {
  const [isHover, setIsHover] = useState(false);
  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  const svgFill = isHover ? "hsl(127, 100%, 82%)" : "#24232C";

  return (
    <button
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={generatePasswordHandler}
      className="flex items-center justify-center gap-[1em] tablet:text-body-dk tablet:mb-[1em] bg-green text-body-mb w-full h-[56px] hover:bg-darkgrayblack hover:text-green hover:border hover:border-green rounded font-bold"
    >
      {isValid ? (
        "GENERATE"
      ) : (
        <p className="text-red">SELECT AN OPTION TO CONTINUE!</p>
      )}
      {isValid ? (
        <span>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill={svgFill}
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            />
          </svg>
        </span>
      ) : (
        ""
      )}
    </button>
  );
}

export default Button;
