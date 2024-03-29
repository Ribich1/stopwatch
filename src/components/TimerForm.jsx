import { useTimers } from 'context/ContextTimers';
import { Formik, Field, Form } from 'formik';
import { timerMs } from 'helpers/getPadTime';
import { nanoid } from 'nanoid';

export const TimerForm = () => {
  const { addTimer } = useTimers();

  const initialValues = {
    id: '',
    name: '',
    timer: '00:00:00',
    variant: 'One',
  };
  const onSubmit = (values, { resetForm }) => {
    const id = nanoid();
      const timer = timerMs(values.timer);
      if (values.variant === 'Two') {
          console.log("two");
          return
      }
    addTimer({ ...values, timer, id });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor="name">Name of Timer</label>
        <Field type="text" id="name" name="name" placeholder="Name of Timer" />
        <label htmlFor="timer">Duration of Timer</label>
        <Field type="time" id="timer" name="timer" step="1" />
        <button type="submit">Submit</button>
        <label>
          <Field type="radio" name="variant" value="One" />
          One
        </label>
        <label>
          <Field type="radio" name="variant" value="Two" />
          Two
        </label>
      </Form>
    </Formik>
  );
};
