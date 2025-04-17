import { createContext, useState } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [initialTime, setInitialTime] = useState(300); // default: 5 minuti

  return (
    <TimerContext.Provider value={{ initialTime, setInitialTime }}>
      {children}
    </TimerContext.Provider>
  );
};
