import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  function reset() {
    setSeconds(0);
  }
  useEffect(() => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });
};

export default Timer;
