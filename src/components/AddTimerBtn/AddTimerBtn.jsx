import { useState } from 'react';
import { nanoid } from 'nanoid';
import { timerMs } from '../../helpers/getPadTime';
import { useTimers } from '../../context/ContextTimers';
import { AddTimerFormModal } from '../AddTimerFormModal/AddTimerFormModal';
import { Button } from './AddTimerBtn.styled';

export const AddTimerBtn = () => {
  const { addTimer } = useTimers();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const id = nanoid();
    console.log('object');
    if (values.variant === 'Two') {
      const dateUntil = `${values.date} ${values.timeUntil}`;
      const dateUntilMs = Date.parse(dateUntil);
      const timer = dateUntilMs - Date.now();
      addTimer({ ...values, timer, id });
      resetForm();
      setIsOpen(false);
      return;
    }
    const timer = timerMs(values.timer);
    addTimer({ ...values, timer, id });
    resetForm();
    setIsOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Add Timer
      </Button>
      <AddTimerFormModal
        onSubmit={handleSubmit}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
