import { useState, useContext, createContext } from 'react';

const timersContext = createContext(null);

export const useTimers = () => useContext(timersContext);

export default function ContextProvider({ children }) {
  const [timers, setTimers] = useState([]);

    const addTimer = (timer) => {
      setTimers(prev => [...prev, timer]);
    };
    
    const delTimer = id => {
      setTimers(timers.filter(a => a.id !== id));
    };

  const initialValues = { timers, addTimer, delTimer };
  return (
    <timersContext.Provider value={initialValues}>
      {children}
    </timersContext.Provider>
  );
}
