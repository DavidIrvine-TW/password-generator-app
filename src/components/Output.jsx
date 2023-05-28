import { useState, useEffect } from "react";

function Output({ newPassword }) {
  const placeholder = <span className="text-gray">P4$5W0rD!</span>;
  const [password, setPassword] = useState(placeholder);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    if (newPassword) {
      setPassword(newPassword);
    }
  }, [newPassword]);

  //hover state for copy icon
  const [isHover, setIsHover] = useState(false);
  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  //copy to clipboard when icon clicked
  const handleCopy = () => {
    const text = password.props ? password.props.children : password;
    copyToClipboard(text);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Text copied successfully
        console.log("Copied to clipboard");
        setCopy(true);

        // Reset copy state after 5 seconds
        setTimeout(() => {
          setCopy(false);
        }, 4000);
      })
      .catch((error) => {
        // Unable to copy text
        console.error("Failed to copy to clipboard:", error);
      });
  };

  return (
    <div className="rounded p-[1em] tablet:px-[2em] bg-darkgrayblack mt-[1em] flex justify-between items-center">
      <h2 className="text-heading-m-mb tablet:text-heading-m-dk text-lightgray">
        {password}
      </h2>
      <div className="flex gap-[1em]">
        <span className="animate-flash text-green tablet:text-body-dk text-body-mb">
          {copy ? "COPIED" : ""}
        </span>
        <span
          className="cursor-pointer"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={handleCopy}
        >
          <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill={isHover ? "lightgray" : "#A4FFAF"}
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Output;
