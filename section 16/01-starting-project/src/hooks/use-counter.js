import { useState, useEffect } from "react";

const useCounter = (direction = "forward") => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (direction) {
        case "backward":
          setCounter((prevCounter) => prevCounter - 1);
          break;
        default:
          setCounter((prevCounter) => prevCounter + 1);
          break;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
