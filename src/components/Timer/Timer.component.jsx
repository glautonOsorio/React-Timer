import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "../Button/Button.component";
import * as Styled from "./Timer.styles";

export const TimerComponent = ({ minutes }) => {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, secondsLeft]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  return (
    <Styled.TimerContainer>
      <Styled.TimerContent>{formatTime(secondsLeft)}</Styled.TimerContent>
      <ButtonComponent
        text={"Iniciar"}
        onClick={startTimer}
        disabled={isActive || secondsLeft === 0}
      />
    </Styled.TimerContainer>
  );
};

TimerComponent.prototype = {
  minutes: PropTypes.number,
};
