import { Formik, Field } from 'formik';
import {
  Button,
  FieldStyled,
  FormStyled,
  Label,
  TitleForm,
} from './AddTimerForm.styled';
import {
  SpanBlue,
  SpanGreen,
  SpanRed,
} from 'components/TimerItem/TimerItem.styled';

export const AddTimerForm = ({ onSubmit }) => {
  const initialValues = {
    id: '',
    name: '',
    timer: '00:00:00',
    variant: 'One',
    date: '',
    timeUntil: '',
    skin: 'Red',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <FormStyled>
          <TitleForm>Add new timer</TitleForm>

          <Label>
            Name of Timer
            <FieldStyled
              required
              type="text"
              name="name"
              placeholder="Name of Timer"
            />
          </Label>

          <Label>
            <Field type="radio" name="variant" value="One" />
            Input timer duration
          </Label>
          <Label>
            <Field type="radio" name="variant" value="Two" />
            Input time until
          </Label>
          {values.variant === 'One' && (
            <>
              <div>
                <Label htmlFor="timer">Duration of Timer</Label>
                <FieldStyled type="time" id="timer" name="timer" step="1" />
              </div>
            </>
          )}
          {values.variant === 'Two' && (
            <>
              <div>
                <Label htmlFor="date">Timer until the date:</Label>
                <FieldStyled required type="date" id="date" name="date" />
              </div>
              <div>
                <Label htmlFor="timeUntil">Timer until the time:</Label>
                <FieldStyled
                  required
                  type="time"
                  id="timeUntil"
                  name="timeUntil"
                  step="1"
                />
              </div>
            </>
          )}
          <Label>
            <Field type="radio" name="skin" value="Red" />
            <SpanRed>Variant Red</SpanRed>
          </Label>
          <Label>
            <Field type="radio" name="skin" value="Green" />
            <SpanGreen>Variant Green</SpanGreen>
          </Label>
          <Label>
            <Field type="radio" name="skin" value="Blue" />
            <SpanBlue>Variant Blue</SpanBlue>
          </Label>
          <Button type="submit">Add Timer</Button>
        </FormStyled>
      )}
    </Formik>
  );
};
