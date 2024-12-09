import { useState } from "react";

function BadHook(cond: boolean) {
  if (cond) {
    //
    // eslint-plugin-react-hooks:
    //   React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
    //   https://react.dev/reference/rules/rules-of-hooks
    //
    const [count, setCount] = useState(0);
    setCount(1);
    console.log("count", count);
  }

  return <></>;
}

export default BadHook;
