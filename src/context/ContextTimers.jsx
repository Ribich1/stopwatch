import { useState, useContext, createContext, useEffect } from 'react';

const timersContext = createContext(null);

export const useTimers = () => useContext(timersContext);

export default function ContextProvider({ children }) {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('timers')) {
      localStorage.setItem('timers', JSON.stringify([]));
    }
    setTimers(JSON.parse(localStorage.getItem('timers')));
  }, []);

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
  }, [timers]);

  const addTimer = timer => {
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
