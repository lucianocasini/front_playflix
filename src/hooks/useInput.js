import { useState } from "react";

function useInput(options = {}) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };
  let toReturn = { value, onChange };

  if (options.reset) toReturn = { ...toReturn, reset };

  return toReturn;
}

export default useInput;
