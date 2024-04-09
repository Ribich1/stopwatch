import { Formik, Field, Form } from 'formik';

export const AddTimerForm = ({ onSubmit }) => {
  const initialValues = {
    id: '',
    name: '',
    timer: '00:00:00',
    variant: 'One',
    date: '',
    timeUntil: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <Form>
          <label>
            <Field type="radio" name="variant" value="One" />
            One
          </label>
          <label>
            <Field type="radio" name="variant" value="Two" />
            Two
          </label>
          <label htmlFor="name">Name of Timer</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name of Timer"
          />
          {values.variant === 'One' && (
            <>
              <label htmlFor="timer">Duration of Timer</label>
              <Field type="time" id="timer" name="timer" step="1" />
            </>
          )}
          {values.variant === 'Two' && (
            <>
              {/* <label htmlFor="nameOfTimerUntil">Name of Timer</label>
              <Field
                type="text"
                id="nameOfTimerUntil"
                name="nameOfTimerUntil"
                placeholder="Name of Timer"
              /> */}
              <label htmlFor="date">Timer until the date:</label>
              <Field type="date" id="date" name="date" />
              <label htmlFor="timeUntil">Timer until the time:</label>
              <Field type="time" id="timeUntil" name="timeUntil" step="1" />
            </>
          )}
          <button type="submit">Add Timer</button>
        </Form>
      )}
    </Formik>
  );
};
