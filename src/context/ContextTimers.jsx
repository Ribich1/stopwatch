import { useState, useContext, createContext } from 'react';

const timersContext = createContext(null);

export const useTimers = () => useContext(timersContext);
const local = JSON.parse(localStorage.getItem('timers'));
export default function ContextProvider({ children }) {
  const [timers, setTimers] = useState([...local]);
  
  console.log(JSON.parse(localStorage.getItem('timers')));

    const addTimer = (timer) => {
      
      setTimers(prev => [...prev, timer]);
    };
    
    const delTimer = id => {
      setTimers(timers.filter(a => a.id !== id));
    };
localStorage.setItem('timers', JSON.stringify(timers));
  const initialValues = { timers, addTimer, delTimer };
  return (
    <timersContext.Provider value={initialValues}>
      {children}
    </timersContext.Provider>
  );
}
