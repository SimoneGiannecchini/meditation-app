import React, { useState, useEffect } from 'react';

const Timer = ({ onDurationChange, onSaveSession }) => {


  const [duration, setDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    onDurationChange(duration);
    setSecondsLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(duration * 60);
  };

  return (
    <div className="timer">
      <p>Selected Duration: {duration} Minutes</p>
      <p>
        Time Remaining: {Math.floor(secondsLeft / 60)}:
        {(secondsLeft % 60).toString().padStart(2, '0')}
      </p>

      <div className="buttons">
        <button onClick={() => setDuration(prev => Math.max(1, prev - 1))}>-</button>
        <button onClick={() => setDuration(prev => prev + 1)}>+</button>
      </div>

      <div className="controls">
  <button onClick={() => setIsRunning(true)}>Start</button>
  <button onClick={() => setIsRunning(false)}>Pausa</button>
  <button onClick={reset}>Reset</button>
  <button onClick={onSaveSession}>Save Session</button>
</div>


    </div>
  );
};

export default Timer;
