import { useState } from 'react';
import { nanoid } from 'nanoid';
import { timerMs } from '../../helpers/getPadTime';
import { useTimers } from '../../context/ContextTimers';
import { AddTimerFormModal } from '../AddTimerFormModal/AddTimerFormModal';

export const AddTimerBtn = () => {
  const { addTimer } = useTimers();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const id = nanoid();
    const timer = timerMs(values.timer);
    if (values.variant === 'Two') {
      const dateUntil = `${values.date} ${values.timeUntil}`;
      const dateUntilMs = Date.parse(dateUntil);
      const timer = dateUntilMs - Date.now();
      addTimer({ ...values, timer, id });
      resetForm();
      setIsOpen(false);
      return;
    }
    addTimer({ ...values, timer, id });
    resetForm();
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Add Timer
      </button>
      <AddTimerFormModal
        onSubmit={handleSubmit}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
