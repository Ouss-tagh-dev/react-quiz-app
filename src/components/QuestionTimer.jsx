import React, { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
  const [reminingTime, setReminingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReminingTime((prevReminingTime) => prevReminingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      value={reminingTime}
      max={timeout}
      className={mode}
    />
  );
}

export default QuestionTimer;
