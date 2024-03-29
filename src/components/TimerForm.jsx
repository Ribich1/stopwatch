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
      console.log('two');
      return;
    }
    addTimer({ ...values, timer, id });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <Form>
          <label>
            <Field type="radio" name="variant" value="One" />
            One
          </label>
          {values.variant === 'One' && (
            <>
              <label htmlFor="name">Name of Timer</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name of Timer"
              />
              <label htmlFor="timer">Duration of Timer</label>
              <Field type="time" id="timer" name="timer" step="1" />
            </>
          )}
          <label>
            <Field type="radio" name="variant" value="Two" />
            Two
          </label>
          {values.variant === 'Two' && (
            <>
              <label htmlFor="nameUntil">Name of Timer</label>
              <Field
                type="text"
                id="nameUntil"
                name="nameUntil"
                placeholder="Name of Timer"
              />
              <label htmlFor="date">Timer until the date:</label>
              <Field type="date" id="date" name="date" />
              <label htmlFor="timeUntil">Timer until the time:</label>
              <Field type="time" id="timeUntil" name="timeUntil" />
            </>
          )}
          <button type="submit">Add Timer</button>
        </Form>
      )}
    </Formik>
  );
};
