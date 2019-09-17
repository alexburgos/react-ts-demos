import React, { useRef, FC } from "react";

const InputFocus:FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus!</button>
    </>
  );
}

export default InputFocus;